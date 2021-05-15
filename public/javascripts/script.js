import ToggleIcon from './libs/ToggleIcon.js';
import Password from './libs/Password.js';
import iconClasses from './config/iconClasses.js';

const eyeFillButtons = document.querySelectorAll('.js-eye-fill');
eyeFillButtons.forEach((eyeFillButton) => {
  eyeFillButton.addEventListener('click', (e) => {
    const target = e.currentTarget;
    const icon = target.firstElementChild;
    const input = target.previousElementSibling;

    const eyeFill = new ToggleIcon(
      icon,
      iconClasses.eyeFill.on,
      iconClasses.eyeFill.off
    );
    eyeFill.toggle();

    const password = new Password(input);
    if (icon.classList.contains(iconClasses.eyeFill.on)) {
      password.show();
    } else {
      password.hide();
    }
  });
});
