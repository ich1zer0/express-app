const express = require('express');
const notfoundController = require('../controllers/not-found');

const router = express.Router();

router.use(notfoundController);

module.exports = router;
