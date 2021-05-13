module.exports = {
  get: (_, res) => {
    res.render('layout/default', {
      title: 'Dashboard',
      template: '../dashboard',
    });
  },
};
