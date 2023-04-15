const UserDto = require("./user.dto");
const MessageDto = require("./message.dto")

class ChatDto {

	id;
	users;
	receiver;
	lastMessage

	constructor(model, uid, message) {
		this.id = model._id;
		this.users = model.users.map((user) => {return new UserDto(user)});
		this.lastMessage= message ? new MessageDto(message) : {};

		this.receiver = this.users.find(user => user.id != uid) ?? this.users[0];;
	}
}

module.exports = ChatDto;
