const express = require('express');
const router = express.Router();
const notfoundController = require('../controllers/not-found');

router.use(notfoundController);

module.exports = router;
