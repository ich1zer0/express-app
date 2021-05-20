const data = {
  title: 'Dashboard',
  view: '../dashboard',
  values: {},
  errors: {},
  scripts: [],
};

module.exports = {
  get: (_, res) => {
    res.render('layout/default', data);
  },
};
