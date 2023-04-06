const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const tokenService = require('./token.service');
const UserDto = require('../dtos/user.dto');
const ApiError = require('../exceptions/api.error');

class AuthService {

	async registration(phone, password, username) {
		const candidateByPhone = await userModel.findOne({phone});
		const candidateByUsername = await userModel.findOne({username});

		if (candidateByPhone) {
			throw ApiError.BadRequest('The user already exists.', [
				{
					"msg": "Phone number is not unique.",
					"param": "phone",
					"location": "body",
				}
			]);
		}

		if (candidateByUsername) {
			throw ApiError.BadRequest('The user already exists.', [
				{
					"msg": "Username is not unique.",
					"param": "username",
					"location": "body",
				}
			]);
		}

		const hashPassword = await bcrypt.hash(password, 3);
		const hex = this.getRandomHexColor();

		const user = await userModel.create({
			phone: phone,
			password: hashPassword,
			username: username,
			hex: hex
		});

		const userDto = new UserDto(user)
		const token = tokenService.generateToken({...userDto});

		return {
			token,
			user: userDto
		}
	}

	getRandomHexColor() {
		const arr = [
				'#C9EEFF', '#97DEFF', '#62CDFF', '#5CE0CD',
				'#C4D138', '#73D138', '#8FE05C', '#D45D6B',
				'#CA64DE', '#64DE80', '#DEDA64', '#64DECC',
				'#EB1AA2', '#1A89EB', '#1AEB4B', '#EBE71A',
				'#4AF069', '#F0AB4A', '#4AF0E7', '#F04AD7',
		];

		const randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	}

	async login(phone, password) {
		const user = await userModel.findOne({phone});
		if (!user) {
			throw ApiError.BadRequest('Credentials are not correct.', [
				{
					"msg": "Credentials are not correct.",
					"param": "credentials",
					"location": "body",
				}
			]);
		}

		const isPasswordEqual = await bcrypt.compare(password, user.password);
		if (!isPasswordEqual) {
			throw ApiError.BadRequest('Credentials are not correct.', [
				{
					"msg": "Credentials are not correct.",
					"param": "credentials",
					"location": "body",
				}
			]);
		}

		const userDto = new UserDto(user);
		const token = tokenService.generateToken({...userDto});

		return {
			token,
			user: userDto
		}
	}
}

module.exports = new AuthService();