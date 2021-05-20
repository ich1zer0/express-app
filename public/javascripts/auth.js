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
