const express = require("express");

const chatController = require("../controllers/chatController");

const router = express.Router();

router.post("/generate", chatController.generateContent);

module.exports = router;