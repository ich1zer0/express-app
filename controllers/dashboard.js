const data = {
  title: 'Dashboard',
  view: '../dashboard',
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/default', data);
  },
};
