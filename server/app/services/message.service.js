const messageModel = require('../models/message.model');
const messageDto = require('../dtos/message.dto');

// Mock class to test messages.
// @todo Replace mock data with request data during socket implementation.
class MessageService {

	async getMessages(data) {
		let messages = await messageModel.find({chat: data.chat});

		messages = await Promise.all(messages.map(async (message) => {
			return new messageDto(message);
		}));

		return messages;
	}

	async createMessage(data) {
		const message = await messageModel.create(data);

		return new messageDto(message)
	}
}

module.exports = new MessageService();