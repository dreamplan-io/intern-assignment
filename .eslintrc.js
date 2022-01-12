module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    // '@typescript-eslint'
  ],
  rules: {
    allowForLoopAfterthoughts: 0,
    'max-len': ['error', { code: 150 }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
