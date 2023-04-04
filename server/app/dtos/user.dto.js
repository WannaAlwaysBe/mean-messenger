class UserDto {

	id;
	username;

	constructor(model) {
		this.id = model._id;
		this.username = model.username;
		this.hex = model.hex;
	}
}

module.exports = UserDto;