const data = {
  title: '404 NotFound',
  view: '../not-found',
};

module.exports = (_, res) => {
  res.status(404).render('layout/default', data);
};
