const fetch = require('node-fetch');

module.exports = {
  get: async (_, res) => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      const data = await response.json();
      const quizArray = await data.results;
      res.json({ quiz: quizArray });
    } catch (error) {
      res.json({ error });
    }
  },
};
