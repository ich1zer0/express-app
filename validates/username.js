const { check } = require('express-validator');

module.exports = check('username')
  .not()
  .isEmpty()
  .withMessage('お名前を入力してください。');
