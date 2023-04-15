const userService = require('../services/user.service');

class UserController {

	async users(req, res, next) {
		try {
			const {start} = req.query;
			const users = await userService.getUsers(start);

			return res.json(users);
		} catch (e) {
			next(e);
		}
	}

	async user(req, res, next) {
		try {
			const uid = req.user.id;
			const user = await userService.getUser(uid);

			return res.json(user);
		} catch (e) {
			next(e);
		}
	}

	async userById(req, res, next) {
		try {
			const uid = req.params.id;
			const user = await userService.getUser(uid);

			return res.json(user);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new UserController();