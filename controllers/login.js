module.exports = {
  get: (_, res) => {
    res.render('layout/auth', {
      title: 'Login',
      template: '../login',
    });
  },
};
