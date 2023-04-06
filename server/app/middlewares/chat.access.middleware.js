const ApiError = require('../exceptions/api.error');

// Redundant middleware. Keep in case of changes.
module.exports = function (req, res, next) {
	try {
		const {users} = req.body;
		const uid = req.user.id;

		if (!(users.includes(uid))) {
			return next(ApiError.ForbiddenError());
		}

		next();
	} catch (e) {
		return next(ApiError.ForbiddenError());
	}
}