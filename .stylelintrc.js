module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true, //ABC順に並べる
    'at-rule-no-unknown': null, //scssで使える @include などにエラーが出ないようにする
    'scss/at-rule-no-unknown': true, //scssでもサポートしていない @ルール にはエラーを出す
  },
};
