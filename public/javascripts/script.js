import toggleEyeFill from './libs/toggle_eye-fill.js';

const eyeFills = document.querySelectorAll('.js-eye-fill');
eyeFills.forEach((eyeFill) => {
  eyeFill.addEventListener('click', toggleEyeFill);
});
