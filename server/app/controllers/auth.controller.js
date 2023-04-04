const authService = require('../services/auth.service.js');

class AuthController {

	async registration(req, res, next) {
		try {
			const {phone, password, username} = req.body;
			const token = await authService.registration(phone, password, username);

			return res.status(201).json(token);
		} catch (e) {
			next(e);
		}
	}

	async login(req, res, next) {
		try {
			const {phone, password} = req.body;
			const token = await authService.login(phone, password);

			return res.json(token);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new AuthController();