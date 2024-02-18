const mongoose = require("mongoose");

const Prompt = require("../models/PromptModel");
const Subject = require("../models/SubjectModel");

const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getPrompt = catchAsync(async (req, res, next) => {
	const promptId = req.params.promptId;
	const prompt = await Prompt.findById(promptId);
	if (!prompt) {
		return next(new AppError("Prompt not found", 404));
	}
	res.status(200).json({
		status: "success",
		data: { prompt },
	});
});

exports.createPrompt = catchAsync(async (req, res, next) => {
	const {
		topicName,
		unit,
		subject: subjectName,
		prompt,
		response,
		imagesUrl,
		prerequisites,
	} = req.body;

	const { _id: promptId } = await (
		await Prompt.create({
			topicName,
			prompt,
			response,
			imagesUrl,
			prerequisites,
		})
	).save();

	let subject = await Subject.findOne({ name: subjectName });
	if (!subject) {
		subject = await Subject.create({
			name: subjectName,
			units: [[], [], [], [], []],
		});
	}
	subject.units[+unit-1].push([promptId.toString(), topicName]);
	await subject.save();

	res.status(201).json({
		status: "success",
		data: { promptId },
	});
});

// exports.patchPrompt = catchAsync(async (req, res, next) => {});
