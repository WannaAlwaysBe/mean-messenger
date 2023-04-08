const chatModel = require('../models/chat.model');
const userModel = require('../models/user.model');
const messageModel = require('../models/message.model');
const ChatDto = require('../dtos/chat.dto');
const ApiError = require('../exceptions/api.error');

class ChatService {

	async getChats(uid) {
		let chats = await chatModel.find({
			users: {"$in": uid}
		}).populate('users');

		chats = await Promise.all(chats.map(async (chat) => {
			let lastMessage = await messageModel.findOne({chat: chat._id}).sort({timestamp: -1}).populate("sender");
			chat = new ChatDto(chat, uid, lastMessage);
			return chat;
		}));

		return chats;
	}

	async createChat(receiverId, senderId) {
		const userInDb = await userModel.findById(receiverId);
		if (!userInDb) {
			throw ApiError.BadRequest('User is not exists.', [
				{
					"msg": `User ${receiverId} is not exists.`,
					"param": "users",
					"location": "body",
				}
			]);
		}

		let chatInDb;
		if (receiverId === senderId) {
			chatInDb = await chatModel.findOne({
				users: [receiverId, senderId]
			});
		} else {
			chatInDb = await chatModel.findOne({
				users: {"$all": [receiverId, senderId]}
			});
		}

		if (chatInDb) {
			throw ApiError.BadRequest('The chat already exists.');
		}

		let chat = await chatModel.create({
			users: [receiverId, senderId]
		});

		chat = await chat.populate('users');

		return new ChatDto(chat, senderId);
	}
}

module.exports = new ChatService();
