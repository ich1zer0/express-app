const express = require('express');
const quizController = require('../controllers/quiz');

const router = express.Router();

router.get('/', quizController.get);

module.exports = router;
