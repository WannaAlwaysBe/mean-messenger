class UserDto {

	id;
	phone;

	constructor(model) {
		this.id = model._id;
		this.phone = model.phone;
	}
}

module.exports = UserDto;