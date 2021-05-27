const { validationResult } = require('express-validator');
const clone = require('rfdc/default');
const { email, password } = require('../validates/index');

const data = {
  values: {},
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('login', data);
  },
  validate: [email, password],
  post: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorArray = errors.array();

      const emailErrors = errorArray.filter((error) => error.param === 'email');
      const passwordErrors = errorArray.filter(
        (error) => error.param === 'password'
      );

      const emailMessage = emailErrors.length > 0 ? emailErrors[0].msg : '';
      const passwordMessage =
        passwordErrors.length > 0 ? passwordErrors[0].msg : '';

      const dataWithValueAndError = {
        ...clone(data),
        values: {
          email: req.body.email,
          password: req.body.password,
        },
        errors: {
          email: emailMessage,
          password: passwordMessage,
        },
      };
      res.render('login', dataWithValueAndError);
    } else {
      res.redirect('/');
    }
  },
};
