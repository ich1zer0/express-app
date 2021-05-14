const { check } = require('express-validator');

module.exports = check('confirmPassword')
  .not()
  .isEmpty()
  .withMessage('パスワード（確認用）を入力してください。')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('確認用パスワードが一致していません。');
    }
    return true;
  });
