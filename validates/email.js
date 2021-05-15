const { check } = require('express-validator');

module.exports = check('email')
  .not()
  .isEmpty()
  .withMessage('メールアドレスを入力してください。')
  .isEmail()
  .withMessage('メールアドレスの形式が正しくありません。');
