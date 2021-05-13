const data = {
  title: 'Register',
  view: '../register',
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
};
