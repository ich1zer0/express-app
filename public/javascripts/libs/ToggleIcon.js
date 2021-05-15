import Icon from './Icon.js';

class ToggleIcon extends Icon {
  constructor(icon, onClass, offClass) {
    super(icon);
    this.onClass = onClass;
    this.offClass = offClass;
  }
  on() {
    this.icon.classList.add(this.onClass);
    this.icon.classList.remove(this.offClass);
  }
  off() {
    this.icon.classList.add(this.offClass);
    this.icon.classList.remove(this.onClass);
  }
  toggle() {
    if (this.icon.classList.contains(this.onClass)) {
      this.off();
    } else {
      this.on();
    }
  }
}

export default ToggleIcon;
