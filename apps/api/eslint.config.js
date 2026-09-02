// eslint.config.js

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'coverage/**',
      'dist/**',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',

      globals: {
        ...globals.node,
      },
    },

    rules: {
      // =========================
      // Correctness
      // =========================

      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],

      'no-duplicate-imports': 'error',

      // =========================
      // Best Practices
      // =========================

      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-throw-literal': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'curly': ['error', 'multi-line'],

      // =========================
      // Node.js
      // =========================

      'no-console': 'warn',

      // =========================
      // Style
      // =========================

      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      'semi': ['error', 'always'],

      'comma-dangle': [
        'error',
        'always-multiline',
      ],

      'object-curly-spacing': [
        'error',
        'always',
      ],

      'array-bracket-spacing': [
        'error',
        'never',
      ],

      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'no-whitespace-before-property': 'error',

      // =========================
      // ES6+
      // =========================

      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'prefer-arrow-callback': 'error',
    },
  },
];
