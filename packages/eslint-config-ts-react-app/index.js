module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    // 'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'shared-node-browser': true,
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
    __PROD__: 'readonly',
  },

  // parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 2018,
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },

  extends: [
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  plugins: ['import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          ['module', '/^@/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },

      plugins: ['react', 'import', 'jsx-a11y', '@typescript-eslint'],
      rules: {
        semi: 'warn',
        'no-console': 'warn',
        'no-underscore-dangle': ['error', { allow: ['__DEV__', '__PROD__'] }],
        // "no-undef": "off", // due to issue https://github.com/eslint/typescript-eslint-parser/issues/437
        quotes: ['error', 'single'],

        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',

        'jsx-a11y/label-has-associated-control': [
          2,
          {
            labelComponents: ['label'],
            labelAttributes: ['htmlFor'],
            controlComponents: ['input'],
          },
        ],

        'import/no-unresolved': 'off', // Let TS handle this
        'import/no-extraneous-dependencies': 'off', // for React apps, every dependencie can be a `devDependencies`
        // "import/prefer-default-export": "off",
        'import/extensions': [
          'error',
          {
            json: 'always',
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
      },
    },
  ],
};
