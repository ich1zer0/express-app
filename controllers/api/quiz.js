const requireEsm = require('esm')(module);
const shuffle = requireEsm('../../public/javascripts/libs/shuffle.js').default;
const fetcher = requireEsm(
  '../../public/javascripts/libs/node-fetcher.js'
).default;
const { quizApiUrl } = requireEsm('../../public/javascripts/config/quiz.js');

class Quiz {
  constructor(
    id,
    type,
    question,
    genre,
    difficulty,
    correctAnswer,
    incorrectAnswers
  ) {
    this.quiz = {
      id,
      question,
      genre,
      difficulty,
      correctAnswer,
      incorrectAnswers,
      choices:
        type === 'boolean'
          ? [correctAnswer, ...incorrectAnswers].sort((a, b) => {
              return a < b ? 1 : -1;
            })
          : shuffle([correctAnswer, ...incorrectAnswers]),
    };
  }
  get getQuiz() {
    return this.quiz;
  }
}

module.exports = {
  get: async (_, res) => {
    try {
      const data = await fetcher(quizApiUrl);
      const quizArray = data.results;

      const formattedQuizArray = quizArray.map((quiz, index) => {
        const formattedQuiz = new Quiz(
          index,
          quiz.type,
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
