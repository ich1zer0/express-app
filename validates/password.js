const { check } = require('express-validator');

const minimumPasswordLength = 7;

module.exports = check('password')
  .not()
  .isEmpty()
  .withMessage('パスワードを入力してください。')
  .isLength({ min: 7 })
  .withMessage(
    `パスワードは${minimumPasswordLength}文字以上で入力する必要があります。`
  );
