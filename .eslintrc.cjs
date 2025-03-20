module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // Add TypeScript parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'sonarjs', 'import'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:sonarjs/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Add TypeScript rules
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': ['error'],
    'import/extensions': 0,
    '@typescript-eslint/no-unused-vars': ['error'], // TypeScript-specific rule
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-unused-vars': 'off', // Disable base rule in favor of TypeScript version
        'no-params-reassign': 'off', // Disable base rule in favor of TypeScript version
      },
    },
  ],
};
