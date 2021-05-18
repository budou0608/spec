// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for ice and react project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali/react'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@appworks/best-practices/react'
    require.resolve('@appworks/eslint-plugin-best-practices/src/configs/react'),
  ],
};
