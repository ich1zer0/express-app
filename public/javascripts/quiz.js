import fetcher from './libs/fetcher.js';
import { quizApiRouteUrl } from './config/quiz.js';

// クイズ情報の配列
let quizData = [];
// クイズの数
let numberOfQuiz = 0;
// 現在の問題数
let currentQuestionNumber = 0;
// 正解数
let numberOfCorrectAnswers = 0;

// スタートエリア要素
const startContainerElm = document.getElementById('startContainer');
const startMessageElm = document.getElementById('startMessage');
const alertElm = document.getElementById('alert');
const startButtonElm = document.getElementById('startButton');
// ローディングエリア要素
const loadingContainerElm = document.getElementById('loadingContainer');
// クイズエリア要素
const quizContainerElm = document.getElementById('quizContainer');
const quizIdElm = document.getElementById('quizId');
const quizGenreElm = document.getElementById('quizGenre');
const quizDifficultyElm = document.getElementById('quizDifficulty');
const quizQuestionElm = document.getElementById('quizQuestion');
const quizChoicesElm = document.getElementById('quizChoices');
// コンプリートエリア要素
const completeContainerElm = document.getElementById('completeContainer');
const numberOfCorrectAnswersElm = document.getElementById(
  'numberOfCorrectAnswers'
);
const retryButtonElm = document.getElementById('retryButton');

/**
 * 要素を表示させる関数
 * @param {HTMLElement} elm 表示する要素
 */
const showElm = (elm) => {
  elm.classList.remove('d-none');
};

/**
 * 要素を非表示にする関数
 * @param {HTMLElement} elm 表示する要素
 */
const hideElm = (elm) => {
  elm.classList.add('d-none');
};

/**
 * クイズデータを初期化する関数
 */
const clearQuizData = () => {
  quizData = [];
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
const clearAlertElm = () => {
  alertElm.textContent = null;
};

/**
 * アラート要素にデータを注入する関数
 */
const injectAlertElm = (msg) => {
  alertElm.textContent = msg;
};

/**
 * クイズエリア要素のデータを初期化する関数
 */
const clearQuizElm = () => {
  const choiceButtonElements = document.querySelectorAll('.js-choice');
  choiceButtonElements.forEach((button) => {
    button.removeEventListener('click', handleClickChoiceButton);
  });
  quizIdElm.textContent = null;
  quizGenreElm.textContent = null;
  quizDifficultyElm.textContent = null;
  quizQuestionElm.textContent = null;
  quizChoicesElm.textContent = null;
};

/**
 * クイズエリア要素にデータを注入する関数
 * @param {number} index 注入するクイズデータのインデックス
 */
const injectQuizElm = (index) => {
  quizIdElm.textContent = quizData[index].id + 1;
  quizGenreElm.textContent = he.decode(quizData[index].genre);
  quizDifficultyElm.textContent = he.decode(quizData[index].difficulty);
  quizQuestionElm.textContent = he.decode(quizData[index].question);
  quizData[index].choices.forEach((choice) => {
    quizChoicesElm.innerHTML += `
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
const clearCompleteElm = () => {
  numberOfCorrectAnswersElm.textContent = null;
};

/**
 * コンプリートエリア要素にデータを注入する関数
 */
const injectCompleteElm = (num) => {
  numberOfCorrectAnswersElm.textContent = num;
};

/**
 * スタートボタンをクリックしたときのハンドラー
 */
const handleClickStartButton = async () => {
  // 初期化
  clearQuizData();
  clearAlertElm();
  clearQuizElm();
  clearCompleteElm();
  // アラート要素を非表示
  hideElm(alertElm);
  // スタートエリア要素を非表示
  hideElm(startContainerElm);
  // スタートメッセージ要素を非表示
  showElm(startMessageElm);
  // ローディングエリア要素を表示
  showElm(loadingContainerElm);
  // クイズデータの取得
  try {
    const data = await fetcher(quizApiRouteUrl);
    // クイズ情報の配列更新
    quizData = data.quizData.map((quiz) => quiz);
    // クイズの数を更新
    numberOfQuiz = quizData.length;
    // クイズエリア要素にデータを注入
    injectQuizElm(currentQuestionNumber);
    // クイズエリア要素を表示
    showElm(quizContainerElm);
  } catch (error) {
    const alertMessage = error.status
      ? `${error.status} エラー: ${error.message}しばらくしてからもう一度お試しください。`
      : 'failed エラー: データの取得に失敗しました。しばらくしてからもう一度お試しください。';
    // スタートメッセージ要素を非表示
    hideElm(startMessageElm);
    // アラート要素にデータを注入
    injectAlertElm(alertMessage);
    // アラート要素を表示
    showElm(alertElm);
    // スタートエリア要素を表示
    showElm(startContainerElm);
  } finally {
    // ローディングエリア要素を非表示
    hideElm(loadingContainerElm);
  }
};

/**
 * リトライボタンをクリックしたときのハンドラー
 */
const handleClickRetryButton = () => {
  // コンプリートエリア要素を非表示
  hideElm(completeContainerElm);
  // スタートエリア要素を表示
  showElm(startContainerElm);
};

/**
 * クイズの答えの選択肢ボタンをクリックしたときのハンドラー
 * @param {Event} e 選択肢ボタン要素
 */
const handleClickChoiceButton = (e) => {
  // クイズエリア要素のデータを初期化
  clearQuizElm();
  // 正解だったときの処理
  if (
    quizData[currentQuestionNumber].correctAnswer === e.target.dataset.choice
  ) {
    // 正解だったら正解数を更新
    incrementNumberOfCorrectAnswers();
  }

  if (numberOfQuiz <= currentQuestionNumber + 1) {
    // クイズエリア要素を非表示
    hideElm(quizContainerElm);
    // コンプリート要素にデータを注入
    injectCompleteElm(numberOfCorrectAnswers);
    // コンプリート要素を表示
    showElm(completeContainerElm);
  } else {
    // 現在の問題数を更新
    incrementCurrentQuestionNumber();
    // クイズエリア要素にデータを注入
    injectQuizElm(currentQuestionNumber);
  }
};
// スタートボタンにイベント登録
startButtonElm.addEventListener('click', handleClickStartButton);
// リトライボタンにイベント登録
retryButtonElm.addEventListener('click', handleClickRetryButton);
