import fetcher from './libs/fetcher.js';
import { quizApiRouteUrl } from './config/quiz.js';

// クイズ情報の配列
let quizCollection = [];
// クイズの数
let numberOfQuiz = 0;
// 現在の問題数
let currentQuestionNumber = 0;
// 正解数
let numberOfCorrectAnswers = 0;

// アラート要素
const alertElement = document.getElementById('alert');
// スタートエリア要素
const startContainerElement = document.getElementById('startContainer');
const startButtonElement = document.getElementById('startButton');
// ローディングエリア要素
const loadingContainerElement = document.getElementById('loadingContainer');
// クイズエリア要素
const quizContainerElement = document.getElementById('quizContainer');
const quizIdElement = document.getElementById('quizId');
const quizGenreElement = document.getElementById('quizGenre');
const quizDifficultyElement = document.getElementById('quizDifficulty');
const quizQuestionElement = document.getElementById('quizQuestion');
const quizChoicesElement = document.getElementById('quizChoices');
// コンプリートエリア要素
const completeContainerElement = document.getElementById('completeContainer');
const numberOfCorrectAnswersElement = document.getElementById(
  'numberOfCorrectAnswers'
);
const retryButtonElement = document.getElementById('retryButton');

/**
 * 要素を表示させる関数
 * @param {HTMLElement} elm 表示する要素
 */
const showElement = (elm) => {
  elm.classList.remove('d-none');
};

/**
 * 要素を非表示にする関数
 * @param {HTMLElement} elm 表示する要素
 */
const hideElement = (elm) => {
  elm.classList.add('d-none');
};

/**
 * クイズデータを初期化する関数
 */
const clearQuizData = () => {
  quizCollection = [];
  numberOfQuiz = 0;
  currentQuestionNumber = 0;
  numberOfCorrectAnswers = 0;
};

/**
 * 現在の問題数をインクリメントする関数
 */
const incrementCurrentQuestionNumber = () => {
  currentQuestionNumber++;
};

/**
 * 正解数をインクリメントする関数
 */
const incrementNumberOfCorrectAnswers = () => {
  numberOfCorrectAnswers++;
};

/**
 * アラート要素のデータを初期化する関数
 */
const clearAlertElement = () => {
  alertElement.textContent = null;
};

/**
 * アラート要素にデータを注入する関数
 */
const injectAlertElement = (msg) => {
  alertElement.textContent = msg;
};

/**
 * クイズエリア要素のデータを初期化する関数
 */
const clearQuizElement = () => {
  const choiceButtonElements = document.querySelectorAll('.js-choice');
  choiceButtonElements.forEach((button) => {
    button.removeEventListener('click', handleClickChoiceButton);
  });
  quizIdElement.textContent = null;
  quizGenreElement.textContent = null;
  quizDifficultyElement.textContent = null;
  quizQuestionElement.textContent = null;
  quizChoicesElement.textContent = null;
};

/**
 * クイズエリア要素にデータを注入する関数
 * @param {number} index 注入するクイズデータのインデックス
 */
const injectQuizElement = (index) => {
  quizIdElement.textContent = quizCollection[index].id + 1;
  quizGenreElement.textContent = he.decode(quizCollection[index].genre);
  quizDifficultyElement.textContent = he.decode(
    quizCollection[index].difficulty
  );
  quizQuestionElement.textContent = he.decode(quizCollection[index].question);
  quizCollection[index].choices.forEach((choice) => {
    quizChoicesElement.innerHTML += `
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

/**
 * コンプリートエリア要素のデータを初期化する関数
 */
const clearCompleteElement = () => {
  numberOfCorrectAnswersElement.textContent = null;
};

/**
 * コンプリートエリア要素にデータを注入する関数
 */
const injectCompleteElement = (num) => {
  numberOfCorrectAnswersElement.textContent = num;
};

/**
 * スタートボタンをクリックしたときのハンドラー
 */
const handleClickStartButton = async () => {
  // 初期化
  clearQuizData();
  clearAlertElement();
  clearQuizElement();
  clearCompleteElement();
  // アラート要素を非表示
  hideElement(alertElement);
  // スタートエリア要素を非表示
  hideElement(startContainerElement);
  // ローディングエリア要素を表示
  showElement(loadingContainerElement);
  // クイズデータの取得
  try {
    const data = await fetcher(quizApiRouteUrl);
    const quizArray = data.quiz;
    // クイズ情報の配列更新
    quizCollection = quizArray.map((quiz) => quiz);
    // クイズの数を更新
    numberOfQuiz = quizCollection.length;
    // クイズエリア要素にデータを注入
    injectQuizElement(currentQuestionNumber);
    // クイズエリア要素を表示
    showElement(quizContainerElement);
  } catch (error) {
    console.error(error);
    // アラート要素にデータを注入
    injectAlertElement(error);
    // アラート要素を表示
    showElement(alertElement);
  } finally {
    // ローディングエリア要素を非表示
    hideElement(loadingContainerElement);
  }
};

/**
 * リトライボタンをクリックしたときのハンドラー
 */
const handleClickRetryButton = () => {
  // コンプリートエリア要素を非表示
  hideElement(completeContainerElement);
  // スタートエリア要素を表示
  showElement(startContainerElement);
};

/**
 * クイズの答えの選択肢ボタンをクリックしたときのハンドラー
 * @param {Event} e 選択肢ボタン要素
 */
const handleClickChoiceButton = (e) => {
  // クイズエリア要素のデータを初期化
  clearQuizElement();
  // 正解だったときの処理
  if (
    quizCollection[currentQuestionNumber].correctAnswer ===
    e.target.dataset.choice
  ) {
    // 正解だったら正解数を更新
    incrementNumberOfCorrectAnswers();
  }

  if (numberOfQuiz <= currentQuestionNumber + 1) {
    // クイズエリア要素を非表示
    hideElement(quizContainerElement);
    // コンプリート要素にデータを注入
    injectCompleteElement(numberOfCorrectAnswers);
    // コンプリート要素を表示
    showElement(completeContainerElement);
  } else {
    // 現在の問題数を更新
    incrementCurrentQuestionNumber();
    // クイズエリア要素にデータを注入
    injectQuizElement(currentQuestionNumber);
  }
};
// スタートボタンにイベント登録
startButtonElement.addEventListener('click', handleClickStartButton);
// リトライボタンにイベント登録
retryButtonElement.addEventListener('click', handleClickRetryButton);
