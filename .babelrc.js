module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: {
          version: 3.8,
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
