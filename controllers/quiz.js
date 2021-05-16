const data = {
  title: 'Quiz',
  view: '../quiz',
  values: {},
  errors: {},
};

module.exports = {
  get: (_, res) => {
    res.render('layout/default', data);
  },
};
