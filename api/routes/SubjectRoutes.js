const express = require('express');

const subjectController = require('../controllers/subjectController');

const router = express.Router();

router.get('/search', subjectController.getSubjectsByName);
router.get('/:subjectId', subjectController.getSubjectTopics);

module.exports = router;
