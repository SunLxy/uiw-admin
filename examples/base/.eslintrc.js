module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-const-assign': 'error',
    eqeqeq: 'error',
    'max-lines': ['error', { max: 500 }],
    'max-depth': ['error', 4],
    'no-empty-function': 'error',
    'no-empty': 'error',
    'no-var': 'error',
  },
}
