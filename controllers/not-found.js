const data = {
  title: '404 NotFound',
  view: '../not-found',
  values: {},
  errors: {},
};

module.exports = (_, res) => {
  res.status(404).render('layout/default', data);
};
