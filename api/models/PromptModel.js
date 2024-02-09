const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
	topicName: {
		type: String,
		required: [true, "Topic name of prompt name is required"],
	},
	prompt: {
		type: String,
		required: [true, "Prompt is required"],
	},
	response: {
		type: String,
		required: [true, "Response from LLM is required"],
	},
	imagesUrl: [[String, String]],
	prerequisites: [[String, String]],
});

const Prompt = mongoose.model("Prompt", PromptSchema);

module.exports = Prompt;
