const data = {
  title: 'Quiz',
  view: '../quiz',
  values: {},
  errors: {},
  scripts: [
    '<script src="/static/javascripts/libs/he.js"></script>',
    '<script src="/static/javascripts/quiz.js" type="module" defer></script>',
  ],
};

module.exports = {
  get: (_, res) => {
    res.render('layout/default', data);
  },
};
