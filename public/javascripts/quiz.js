let quizCollection = [];
let numberOfQuiz = 0;
let currentQuestionNumber = 0;
let numberOfCorrectAnswers = 0;

const alertElement = document.getElementById('alert');
const loadingElement = document.getElementById('loading');
const spinnerElement = document.getElementById('spinner');
const quizStartButtonElement = document.getElementById('quizStartButton');

const quizContainerElement = document.getElementById('quizContainer');
const idElement = document.getElementById('id');
const genreElement = document.getElementById('genre');
const difficultyElement = document.getElementById('difficulty');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');

const completeContainerElement = document.getElementById('completeContainer');
const numberOfCorrectAnswersElement = document.getElementById(
  'numberOfCorrectAnswers'
);
const quizRetryButtonElement = document.getElementById('quizRetryButton');

const showElement = (Element) => {
  Element.classList.remove('d-none');
};
const hideElement = (Element) => {
  Element.classList.add('d-none');
};

const clearAlert = () => {
  alertElement.textContent = null;
  hideElement(alertElement);
};

const clearQuizData = () => {
  const choiceButtonElements = document.querySelectorAll('.js-choice');
  choiceButtonElements.forEach((button) => {
    button.removeEventListener('click', handleClickChoiceButton);
  });
  idElement.textContent = '';
  genreElement.textContent = '';
  difficultyElement.textContent = '';
  questionElement.textContent = '';
  choicesElement.textContent = '';
};

const setQuizData = (num) => {
  idElement.textContent = quizCollection[num].id + 1;
  genreElement.textContent = he.decode(quizCollection[num].genre);
  difficultyElement.textContent = he.decode(quizCollection[num].difficulty);
  questionElement.textContent = he.decode(quizCollection[num].question);
  quizCollection[num].choices.forEach((choice) => {
    choicesElement.innerHTML += `
    <div class="col-12 col-md-6 mt-2">
      <button class="btn btn-outline-primary w-100 js-choice" type="button" data-choice="${choice}">
        ${he.decode(choice)}
      </button>
    </div>`;
  });
  const choiceButtonElements = document.querySelectorAll('.js-choice');
  choiceButtonElements.forEach((button) => {
    button.addEventListener('click', handleClickChoiceButton);
  });
};

const clearNumberOfCorrectAnswers = () => {
  numberOfCorrectAnswersElement.textContent = '';
};
const setNumberOfCorrectAnswers = () => {
  numberOfCorrectAnswersElement.textContent = numberOfCorrectAnswers;
};

const handleClickQuizStartButton = async () => {
  clearAlert();
  showElement(spinnerElement);
  quizCollection = [];
  numberOfQuiz = 0;
  currentQuestionNumber = 0;
  numberOfCorrectAnswers = 0;
  try {
    const response = await fetch('http://localhost:3000/api/quiz');
    const data = await response.json();
    const quizArray = await data.quiz;

    quizArray.forEach((quiz) => {
      quizCollection.push(quiz);
    });

    numberOfQuiz = quizCollection.length;

    setQuizData(currentQuestionNumber);
    hideElement(loadingElement);
    showElement(quizContainerElement);
  } catch (error) {
    console.error(error);
    alertElement.textContent = error;
    showElement(alertElement);
  } finally {
    hideElement(spinnerElement);
  }
};

const handleClickQuizRetryButton = () => {
  hideElement(completeContainerElement);
  showElement(loadingElement);
};

const handleClickChoiceButton = (e) => {
  clearQuizData();
  if (
    quizCollection[currentQuestionNumber].correctAnswer ===
    e.target.dataset.choice
  ) {
    numberOfCorrectAnswers++;
  }

  if (numberOfQuiz <= currentQuestionNumber + 1) {
    hideElement(quizContainerElement);
    setNumberOfCorrectAnswers();
    showElement(completeContainerElement);
    return;
  }

  currentQuestionNumber++;
  setQuizData(currentQuestionNumber);
};

quizRetryButtonElement.addEventListener('click', handleClickQuizRetryButton);

quizStartButton.addEventListener('click', handleClickQuizStartButton);
