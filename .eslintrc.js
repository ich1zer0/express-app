module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    NODE_ENV: 'readonly',
    __DEV__: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
};
