const { getESLintConfig } = require('./packages/spec/src/');

module.exports = getESLintConfig('react', {
  rules: {
    // For test file. This project is no UI project, not use line height.
    '@appworks/best-practices/recommend-add-line-height-unit': 'off',
  },
});
