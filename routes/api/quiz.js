const express = require('express');
const apiQuizController = require('../../controllers/api/quiz');

const router = express.Router();

router.get('/', apiQuizController.get);

module.exports = router;
