const data = {
  title: 'Dashboard',
  view: '../dashboard',
  values: {},
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/default', data);
  },
};
