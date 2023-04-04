const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	phone: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	username: {
		type: String,
		unique: true,
		required: true
	},
	hex: {
		type: String
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;