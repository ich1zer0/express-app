import toggleClass from './libs/toggle_class.js';
import togglePasswordView from './libs/toggle_password-view.js';

const eyeFills = document.querySelectorAll('.js-eye-fill');
eyeFills.forEach((eyeFill) => {
  eyeFill.addEventListener('click', (e) => {
    const target = e.currentTarget;
    const icon = target.firstElementChild;
    const iconClass = {
      on: 'bi-eye-fill',
      off: 'bi-eye-slash-fill',
    };
    const input = target.previousElementSibling;

    toggleClass(icon, iconClass);
    togglePasswordView(input, icon.classList.contains(iconClass.on));
  });
});

const quizStartBtn = document.getElementById('quizStartBtn');
quizStartBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/quiz');
    const quiz = await response.json();
    console.log(quiz);
  } catch (error) {
    console.error(error);
  }
});
