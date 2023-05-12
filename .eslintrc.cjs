module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'sonarjs', 'unicorn'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:sonarjs/recommended',
    'eslint:recommended',
    'plugin:unicorn/recommended',
  ],

  rules: {
    'unicorn/no-array-reduce': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-new-array': 0,
    'unicorn/no-null': 0,
    'no-console': 'off',
    'prettier/prettier': ['error'],
  },
};
