const chatService = require('../services/chat.service.js');


class ChatController {

	async getChats(req, res, next) {
		try {
			const uid = req.user.id;
			const chats = await chatService.getChats(uid);

			return res.json(chats);
		} catch (e) {
			next(e);
		}
	}

	async createChat(req, res, next) {
		try {
			const {receiver} = req.body;
			const uid = req.user.id;
			const chat = await chatService.createChat(receiver, uid);

			return res.status(201).json(chat);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new ChatController();