const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const promptRouter = require('./routes/promptRoutes');
const subjectRouter = require('./routes/SubjectRoutes');
const chatRouter = require('./routes/chatRoutes');

const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use('/prompt', promptRouter);
app.use('/subject', subjectRouter);
app.use('/chat', chatRouter);

app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
