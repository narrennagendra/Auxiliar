const express = require("express");
const morgan = require("morgan");

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const promptRouter = require('./routes/promptRoutes');
const subjectRouter = require('./routes/SubjectRoutes');

const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.use('/prompt', promptRouter);
app.use('/subject', subjectRouter);

app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
