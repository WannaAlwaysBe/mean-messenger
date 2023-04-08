const userModel = require('../models/user.model');
const UserDto = require('../dtos/user.dto');

class UserService {

	async getUser(uid) {
		let user = await userModel.findById(uid);
		user = new UserDto(user);

		return user;
	}

	async getUsers(start) {
		let users;
		if (start) {
			users = await this.getUsersByStart(start);
		} else {
			users = await userModel.find().limit(10);
		}

		users = users.map((user) => {
			return new UserDto(user);
		});

		return users;
	}

	getUsersByStart(start) {
		return userModel.find({
			'username': {
				$regex: '^' + start,
				$options: 'i'
			}
		}).limit(10);
	}
}

module.exports = new UserService();
