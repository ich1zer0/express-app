const data = {
  title: 'Login',
  view: '../login',
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
};
