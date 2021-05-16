const express = require('express');
const router = express.Router();
const apiQuizController = require('../../controllers/api/quiz');

router.get('/', apiQuizController.get);

module.exports = router;
