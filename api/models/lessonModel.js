const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Lesson name is required"],
		unique: true,
	},
	Subject: {
		type: String,
		required: [true, "Subject name of lesson is required"],
	},
});

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
