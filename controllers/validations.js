const { check } = require('express-validator');

const minimumPasswordLength = 7;

module.exports = {
  username: check('username')
    .not()
    .isEmpty()
    .withMessage('お名前を入力してください。'),
  email: check('email')
    .not()
    .isEmpty()
    .withMessage('メールアドレスを入力してください。')
    .isEmail()
    .withMessage('メールアドレスの形式が正しくありません。'),
  password: check('password')
    .not()
    .isEmpty()
    .withMessage('パスワードを入力してください。')
    .isLength({ min: 7 })
    .withMessage(
      `パスワードは${minimumPasswordLength}文字以上で入力する必要があります。`
    ),
  confirmPassword: check('confirmPassword')
    .not()
    .isEmpty()
    .withMessage('パスワード（確認用）を入力してください。')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('確認用パスワードが一致していません。');
      }
      return true;
    }),
};
