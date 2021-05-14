/**
 * HTML 要素のクラスを切り替える関数
 * @param {HTMLElement} target HTML 要素
 * @param {object} classes 切り替える class のオブジェクト（on, off）
 */
const toggleClass = (target, classes) => {
  if (target.classList.contains(classes.on)) {
    target.classList.add(classes.off);
    target.classList.remove(classes.on);
  } else {
    target.classList.add(classes.on);
    target.classList.remove(classes.off);
  }
};

export default toggleClass;
