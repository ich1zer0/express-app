const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.get('/', loginController.get);

module.exports = router;
