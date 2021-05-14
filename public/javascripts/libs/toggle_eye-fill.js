const toggleEyeFill = (e) => {
  const icon = e.currentTarget.firstElementChild;
  if (icon.classList.contains('bi-eye-fill')) {
    icon.classList.add('bi-eye-slash-fill');
    icon.classList.remove('bi-eye-fill');
  } else {
    icon.classList.add('bi-eye-fill');
    icon.classList.remove('bi-eye-slash-fill');
  }
};

export default toggleEyeFill;
