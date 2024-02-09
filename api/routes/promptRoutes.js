const express = require("express");
// const { body } = require("express-validator");

const promptController = require("../controllers/promptController");

const router = express.Router();

router.get("/:promptId", promptController.getPrompt);
router.post("/create", promptController.createPrompt);
// router.patch("/update/:promptId", promptController.patchPrompt);

module.exports = router;
