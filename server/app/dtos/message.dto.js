class MessageDto {

	id;
	sender;
	text;
	timestamp;

	constructor(model) {
		this.id = model._id;
		this.sender = model.sender;
		this.text = model.text;
		this.timestamp = model.createdAt;
	}
}

module.exports = MessageDto;