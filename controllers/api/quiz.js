const requireEsm = require('esm')(module);
const fetch = require('node-fetch');
const shuffle = requireEsm('../../public/javascripts/libs/shuffle.js').default;

class Quiz {
  constructor(question, genre, difficulty, correctAnswer, incorrectAnswers) {
    this.quiz = {
      question,
      genre,
      difficulty,
      correctAnswer,
      incorrectAnswers,
      choices: shuffle([correctAnswer, ...incorrectAnswers]),
    };
  }
  get getQuiz() {
    return this.quiz;
  }
}

module.exports = {
  get: async (_, res) => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      const data = await response.json();
      const quizArray = await data.results;

      const formattedQuizArray = quizArray.map((quiz) => {
        const formattedQuiz = new Quiz(
          quiz.question,
          quiz.category,
          quiz.difficulty,
          quiz.correct_answer,
          quiz.incorrect_answers
        );
        return formattedQuiz.getQuiz;
      });
      res.json({ quiz: formattedQuizArray });
    } catch (error) {
      res.json({ error });
    }
  },
};
