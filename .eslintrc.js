module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,

  },
  settings: {
    'import/no-unresolved': [2, { ignore: ['^https'] }],
  },

};
