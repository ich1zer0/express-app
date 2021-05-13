const data = {
  title: '404 NotFound',
  view: '../not-found',
  errors: {},
};

module.exports = (_, res) => {
  res.status(404).render('layout/default', data);
};
