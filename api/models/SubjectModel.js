const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Subject name is required"],
		unique: true,
	},
	units: [[{ type: mongoose.Schema.Types.ObjectId, ref: "Prompt" }, String]],
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;
