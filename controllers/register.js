const { validationResult } = require('express-validator');
const clone = require('rfdc/default');
const {
  username,
  email,
  password,
  confirmPassword,
} = require('../validates/index');

const data = {
  title: 'Register',
  view: '../register',
  values: {},
  errors: {},
  scripts: ['auth.js'],
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
  validate: [username, email, password, confirmPassword],
  post: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorArray = errors.array();

      const usernameErrors = errorArray.filter(
        (error) => error.param === 'username'
      );
      const emailErrors = errorArray.filter((error) => error.param === 'email');
      const passwordErrors = errorArray.filter(
        (error) => error.param === 'password'
      );
      const confirmPasswordErrors = errorArray.filter(
        (error) => error.param === 'confirmPassword'
      );

      const usernameMessage =
        usernameErrors.length > 0 ? usernameErrors[0].msg : '';
      const emailMessage = emailErrors.length > 0 ? emailErrors[0].msg : '';
      const passwordMessage =
        passwordErrors.length > 0 ? passwordErrors[0].msg : '';
      const confirmPasswordMessage =
        confirmPasswordErrors.length > 0 ? confirmPasswordErrors[0].msg : '';

      const dataWithValueAndError = {
        ...clone(data),
        values: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword,
        },
        errors: {
          username: usernameMessage,
          email: emailMessage,
          password: passwordMessage,
          confirmPassword: confirmPasswordMessage,
        },
      };
      res.render('layout/auth', dataWithValueAndError);
    } else {
      res.redirect('/');
    }
  },
};
