const express = require('express');

const subjectController = require('../controllers/subjectController');

const router = express.Router();

router.get('/:subjectId', subjectController.getSubjectTopics);
router.get('/search', subjectController.getSubjectsByName);

module.exports = router;
