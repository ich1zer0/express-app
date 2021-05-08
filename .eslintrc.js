module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    NODE_ENV: 'readonly',
    __DEV__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
  },
};
