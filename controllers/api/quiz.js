const Quiz = require('../../models/quizModel.js');

module.exports = {
  get: async (_, res) => {
    try {
      const quizData = await Quiz.getQuiz();
      res.json({
        status: 200,
        quizData,
      });
    } catch (error) {
      res
        .status(error.status)
        .send(
          error.status
            ? `${error.status} エラー: ${error.message}`
            : 'failed エラー: データの取得に失敗しました。'
        );
    }
  },
};
