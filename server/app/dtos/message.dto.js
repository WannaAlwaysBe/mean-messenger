const UserDto = require('./user.dto');

class MessageDto {

	id;
	sender;
	text;
	timestamp;

	constructor(model) {
		this.id = model._id;
		this.sender = new UserDto(model.sender);
		this.text = model.text;
		this.timestamp = model.timestamp;
	}
}

module.exports = MessageDto;