module.exports = {
  plugins: ['@appworks/best-practices'],
  overrides: [
    {
      files: ['package.json'],
      processor: '@appworks/best-practices/.json',
      rules: {
        quotes: 'off',
        semi: 'off',
        'eol-last': 'off',
        'quote-props': 'off',
        'comma-dangle': 'off',
        '@appworks/best-practices/deps-no-ice-scripts': 'warn',
        '@appworks/best-practices/deps-no-resolutions': 'warn',
        '@appworks/best-practices/deps-no-router-library': 'warn',
        '@appworks/best-practices/no-broad-semantic-versioning': 'error',
        '@appworks/best-practices/recommend-update-rax': 'warn',
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/*.{j,t}s?(x)',
        '**/test/*.{j,t}s?(x)',
      ],
      env: { jest: true },
    },
  ],
  rules: {
    'max-len': ['warn', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    '@appworks/best-practices/no-http-url': 'warn',
    '@appworks/best-practices/no-js-in-ts-project': 'warn',
    '@appworks/best-practices/no-lowercase-component-name': 'warn',
    '@appworks/best-practices/no-secret-info': 'error',
    '@appworks/best-practices/recommend-add-line-height-unit': 'error',
    '@appworks/best-practices/recommend-functional-component': 'warn',
    '@appworks/best-practices/recommend-polyfill': 'warn',
  },
};
