module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/state-in-constructor': [1, 'never'],
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    // 'react/destructuring-assignment': [1, 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
  },
};
