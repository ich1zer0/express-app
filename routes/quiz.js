const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz');

router.get('/', quizController.get);

module.exports = router;
