const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register');

router.get('/', registerController.get);
router.post('/', registerController.validate, registerController.post);

module.exports = router;
