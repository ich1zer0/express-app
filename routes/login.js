const express = require('express');
const loginController = require('../controllers/login');

const router = express.Router();

router.get('/', loginController.get);
router.post('/', loginController.validate, loginController.post);

module.exports = router;
