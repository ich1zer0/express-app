const data = {
  title: 'Dashboard',
  view: '../dashboard',
};

module.exports = {
  get: (_, res) => {
    res.render('layout/default', data);
  },
};
