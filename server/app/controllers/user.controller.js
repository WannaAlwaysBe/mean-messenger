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
}

module.exports = new UserController();