const catchAsync = require("./../utils/catchAsync");
const Subject = require("../models/SubjectModel");

exports.getSubjectTopics = catchAsync(async (req, res, next) => {
	const subjectId = req.params.subjectId;
	const subject = await Subject.findById(subjectId);
	if (!subject) {
		return next(new AppError("Subject not found", 404));
	}
	res.status(200).json({
		status: "success",
		data: { subject },
	});
});

exports.getSubjectsByName = catchAsync(async (req, res, next) => {
	const searchQuery = req.query.s;
	const result = Subject.find({
		name: { $regex: searchQuery, $options: "i" },
	}).limit(10);
	res.status(200).json({
		status: "success",
		data: { result },
	});
});
