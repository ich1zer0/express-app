module.exports = {
  get: (_, res) => {
    res.render('layout/auth', {
      title: 'Register',
      view: '../register',
    });
  },
};
