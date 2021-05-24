const Quiz = require('../../models/quizModel.js');

module.exports = {
  get: async (_, res) => {
    try {
      const quiz = await Quiz.getQuiz();
      res.json({ quiz });
    } catch (error) {
      console.log('えらー', typeof error);
      console.error(error);
      res.json({ error });
    }
  },
};
