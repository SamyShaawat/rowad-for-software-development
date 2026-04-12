module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'build', '.next', 'out', 'e2e'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  globals: {
    process: 'readonly',
    module: 'readonly',
  },
  plugins: [],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
};
