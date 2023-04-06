class ApiError extends Error {
	status;
	errors;

	constructor(status, message, errors = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static BadRequest(message, errors = []) {
		return new ApiError(400, message, errors);
	}

	static UnauthorizedError() {
		return new ApiError(401, 'User is not authorized.');
	}

	static ForbiddenError() {
		return new ApiError(403, 'Access is forbidden.')
	}
}


module.exports = ApiError;