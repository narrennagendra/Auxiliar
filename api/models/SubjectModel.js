const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Subject name is required"],
		unique: true,
	},
	units: [[[String, String]]],
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;
