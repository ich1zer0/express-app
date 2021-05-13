const data = {
  title: 'Login',
  view: '../login',
};

module.exports = {
  get: (_, res) => {
    res.render('layout/auth', data);
  },
};
