const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: [true, "Email is required"],
	},
	role: {
		type: String,
		enum: ["user", "teacher", "admin"],
		default: "user",
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 8,
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Please confirm your password"],
		validate: {
			validator: function (el) {
				return el === this.password;
			},
			message: "Passwords are not the same!",
		},
	},
});

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
