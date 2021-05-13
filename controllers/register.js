const data = {
  title: 'Register',
  view: '../register',
  values: {},
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
};
