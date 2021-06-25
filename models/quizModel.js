const requireEsm = require('esm')(module);
const shuffle = requireEsm('../public/javascripts/libs/shuffle.js').default;
const fetcher = requireEsm(
  '../public/javascripts/libs/node-fetcher.js'
).default;
const { quizApiUrl } = requireEsm('../public/javascripts/config/quiz.js');

class Quiz {
  static async getQuiz() {
    const data = await fetcher(quizApiUrl);

    return data.results.map((quiz, index) => ({
      id: index,
      question: quiz.question,
      genre: quiz.category,
      difficulty: quiz.difficulty,
      correctAnswer: quiz.correct_answer,
      incorrectAnswers: quiz.incorrect_answers,
      choices:
        quiz.type === 'boolean'
          ? [quiz.correct_answer, ...quiz.incorrect_answers].sort((a, b) => {
              return a < b ? 1 : -1;
            })
          : shuffle([quiz.correct_answer, ...quiz.incorrect_answers]),
    }));
  }
}

module.exports = Quiz;
