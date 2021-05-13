const data = {
  title: 'Login',
  view: '../login',
  values: {},
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
};
