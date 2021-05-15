class Password {
  constructor(input) {
    this.input = input;
  }
  show() {
    this.input.type = 'text';
  }
  hide() {
    this.input.type = 'password';
  }
}

export default Password;
