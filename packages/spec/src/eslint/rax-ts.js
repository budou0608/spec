// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for Rax TypeScript project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali/typescript/rax'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@appworks/best-practices/rax-ts'
    require.resolve('@appworks/eslint-plugin-best-practices/src/configs/rax-ts'),
  ],
};
