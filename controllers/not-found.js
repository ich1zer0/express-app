module.exports = (_, res) => {
  res.status(404).render('layout/default', {
    title: '404 NotFound',
    template: '../not-found',
  });
};
