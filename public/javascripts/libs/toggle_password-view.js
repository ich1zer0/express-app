/**
 * 条件によって input[type="password"] と input[type="text"] を切り替える関数
 * @param {HTMLInputElement} target 変更する input 要素
 * @param {boolean} condition
 */
const togglePasswordView = (target, condition) => {
  if (condition) {
    target.type = 'text';
  } else {
    target.type = 'password';
  }
};

export default togglePasswordView;
