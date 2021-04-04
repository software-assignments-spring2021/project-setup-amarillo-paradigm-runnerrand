const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	passwordconfirm: {type: String, required: false},
	first: {type: String, required: true},
	last: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	phone_number: {type: Boolean, required: true},
	zip_code: {type: String},
});


module.exports = mongoose.model('User', UserSchema);