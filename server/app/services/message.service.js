const messageModel = require('../models/message.model');

// Mock class to test messages.
// @todo Replace mock data with request data during socket implementation.
class MessageService {

	async getMessages() {
		const messages = await messageModel.find({chat: "642f2469a7509f02aa4e6e28"});
		console.log(messages);
	}

	async createMessage() {
		await messageModel.create({
			chat: "642f2469a7509f02aa4e6e28",
			sender: "642ca0dbf5bdd19d6bf2f114",
			text: "Test Message 3",
			timestamp: Date.now().toString()
		});
	}
}

module.exports = new MessageService();