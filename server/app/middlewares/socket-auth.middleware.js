const tokenService = require('../services/token.service');

module.exports = function (socket, next) {
	const token = socket.handshake.headers.authorization;
	if (!token) {
		next(new Error("Not authorized"));
	}

	const accessToken = token.split(' ')[1];
	if (!accessToken) {
		next(new Error("Not authorized"));
	}
	const userData = tokenService.validateAccessToken(accessToken);
	if (!userData) {
		next(new Error("Not authorized"));
	}

	socket.user = userData;
	next();
}