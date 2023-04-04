const userModel = require('../models/user.model');
const UserDto = require('../dtos/user.dto');

class UserService {

	async getUsers(start) {
		let users;
		if (start) {
			users = await this.getUsersByStart(start);
		} else {
			users = await userModel.find().limit(10);
		}

		users = users.map((user) => {
			return new UserDto(user);
		})

		return {users};
	}

	getUsersByStart(start) {
		const users = userModel.find({
			'username': {
				$regex: '^' + start,
				$options: 'i'
			}
		}).limit(10);

		return users;
	}
}

module.exports = new UserService();