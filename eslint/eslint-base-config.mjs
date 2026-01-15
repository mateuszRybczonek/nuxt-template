/*
  We use the recommended config from eslint and from neostandard. Only rules
  that are not covered by the recommended configs or are overridden are included
  in this file.
  https://eslint.org/docs/latest/rules/
 */

const configs = [
  {
    name: 'override/base',
    rules: {
      'array-callback-return': ['error', { checkForEach: true }], // Default is false
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      camelcase: 'off', // Handled by @typescript-eslint/naming-convention
      'capitalized-comments': [
        'off',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignorePattern: 'noinspection .+',
        },
      ],
      'class-methods-use-this': 'error',
      'consistent-return': 'error',
      'consistent-this': ['error', 'self'],
      curly: ['error', 'all'],
      'default-case': 'error',
      'default-param-last': 'error',
      'func-name-matching': 'error',
      'func-names': ['error', 'as-needed'],
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'id-length': [
        'error',
        { min: 2, exceptions: ['a', 'b', 'i', 'j', 'k', 'x', 'y', 'z', '_'] },
      ],
      'max-classes-per-file': ['error', { max: 1 }],
      'max-depth': ['error', { max: 4 }],
      'max-lines': ['error', { max: 270, skipComments: true }],
      'max-lines-per-function': ['error', { max: 60, skipComments: true }],
      'max-nested-callbacks': ['error', { max: 3 }],
      'max-params': ['error', { max: 4 }],
      'max-statements': ['error', 31],
      'n/handle-callback-err': 'off',
      'new-cap': 'error', // Overrides neostandard
      'no-alert': 'error',
      'no-bitwise': 'error',
      'no-constructor-return': 'error',
      'no-div-regex': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-extend-native': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-this': 'error',
      'no-label-var': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-promise-executor-return': 'error',
      'no-script-url': 'error',
      'no-shadow': 'error',
      'no-undefined': 'off', // We have no problem using undefined
      'no-underscore-dangle': 'error',
      'no-unused-expressions': 'error',
      'no-use-before-define': 'off',
      'no-useless-assignment': 'error',
      'no-useless-concat': 'error',
      'no-var': 'error',
      'no-void': 'off',
      'object-shorthand': 'error',
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': 'off', // Too many false positives
      'prefer-exponentiation-operator': 'error',

      // Don't need named groups when using with function callbacks,
      // and named groups are useless when there is only one capture.
      'prefer-named-capture-group': 'off',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'off', // Off for Ionic 8, on for web
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-atomic-updates': 'off', // Too many false positives
      'require-await': 'error',
      'require-unicode-regexp': 'error',
    },
  },
  {
    name: 'disable/base/vue',
    files: ['**/*.vue'],
    rules: {
      // Templates can be quite long
      'max-lines': 'off',

      // There is currently a bug in the vue parser that does not recognize
      // variables used in templates.
      'no-useless-assignment': 'off',
    },
  },
]

export default configs
