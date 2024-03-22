const catchAsync = require("./../utils/catchAsync");

const LLM_url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`;

const generationConfig = {
	temperature: 0.9,
	topK: 1,
	topP: 1,
	maxOutputTokens: 2048,
	stopSequences: [],
};

const safetySettings = [
	{
		category: "HARM_CATEGORY_HARASSMENT",
		threshold: "BLOCK_MEDIUM_AND_ABOVE",
	},
	{
		category: "HARM_CATEGORY_HATE_SPEECH",
		threshold: "BLOCK_MEDIUM_AND_ABOVE",
	},
	{
		category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
		threshold: "BLOCK_MEDIUM_AND_ABOVE",
	},
	{
		category: "HARM_CATEGORY_DANGEROUS_CONTENT",
		threshold: "BLOCK_MEDIUM_AND_ABOVE",
	},
];

exports.generateContent = catchAsync(async (req, res, next) => {
	const history = req.body.history;
	const llm_response = await fetch(LLM_url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			contents: history,
			generationConfig,
			safetySettings,
		}),
	});
	const llm_data = await llm_response.json();
	res.status(200).json({
		data: llm_data.candidates[0].content.parts[0].text,
	});
});
