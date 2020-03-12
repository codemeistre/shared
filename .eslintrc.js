module.exports = {
  env: {
    node: true,
    es6: true,
  },

  extends: ['plugin:prettier/recommended'],

  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@/', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },

  overrides: [
    /* ==================== Dealing with JavaScript files ==================== */
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      extends: ['airbnb-base', 'plugin:prettier/recommended'],

      plugins: ['import', 'eslint-plugin-import-helpers'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        /* ==================== overrides Airbnb's rules ==================== */
        'no-use-before-define': 'off',
        'no-console': 'off',
        'class-methods-use-this': 'off',
        'no-underscore-dangle': ['error', { allow: ['__DEV__', '__PROD__'] }],

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

    /* ==================== Dealing with TypeScript files ==================== */
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',

      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2018,
      },

      extends: [
        'airbnb-base',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],

      plugins: ['import', '@typescript-eslint'],
      rules: {
        /* ==================== overrides Airbnb's rules ==================== */
        'import/no-unresolved': 'off', // Let TS handle this
        'import/named': 'off', // and this, due to some resolution error
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
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.d.ts', '.ts'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root/>@types` directory even it doesn't contain any source code
        directory: './',
      },
      node: {
        extensions: ['.js', '.ts'],
        // Allows us to lint absolute imports within codebase
        // moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
