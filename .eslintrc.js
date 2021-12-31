module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    'no-param-reassign': [0],
    'react/require-default-props': [0],
    // 'import/no-unresolved': [
    //   2,
    //   {
    //     ignore: ['@'], // @ 是设置的路径别名
    //   },
    // ],
    // 'import/extensions': ['always'],
  },
};
