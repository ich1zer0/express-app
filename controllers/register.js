const data = {
  title: 'Register',
  view: '../register',
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
};
