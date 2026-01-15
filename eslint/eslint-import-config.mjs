import importPlugin from 'eslint-plugin-import'

// This config only defines the rules for the import plugin that are either
// not defined or are different from the base neostandard config.
const config = {
  name: 'override/import',
  files: ['**/*.{mjs,ts,vue}'],
  plugins: {
    import: importPlugin,
  },
  settings: {
    // Tell eslint-plugin-import to treat @ws/ as an internal package
    // for grouping
    'import/internal-regex': '^@ws/',

    // Use the node resolver imports (importing a directory
    // imports index.{js,ts,etc})
    'import/resolver': {
      node: ['.mjs', '.js', '.cjs'],
      typescript: ['.ts', '.d.ts', '.vue'],
    },
    'eslint-import-resolver-custom-alias': {
      alias: {
        '@': './src',
        '~': './app',
      },
      extensions: ['.css', '.js', '.svg', '.ts', '.vue'],
    },
  },
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        cjs: 'always',
        mjs: 'ignorePackages',
        json: 'always',
        vue: 'always',
        svg: 'always',
        css: 'always',
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'off',
    'import/namespace': 'error',
    'import/newline-after-import': [
      'error',
      {
        count: 1,
        exactCount: true,
        considerComments: true,
      },
    ],
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'off', // We let oxlint handle this
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'off',
    'import/no-named-export': 'off',
    'import/no-namespace': ['off', { ignore: ['package.json'] }],
    'import/no-nodejs-modules': 'off',
    'import/no-require': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': [
      'error',
      { allow: ['**/*.+(css|pcss|svg)'] },
    ],
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': [
      'off',
      {
        noUselessIndex: false,
        commonjs: false,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '@ws/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        distinctGroup: true,
        'newlines-between': 'always-and-inside-groups',
        named: true,
        alphabetize: { order: 'asc', caseInsensitive: true },
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',

    // Turn off import-x rules that neostandard enables
    'import-x/no-absolute-path': 'off',
    'import-x/export': 'off',
    'import-x/first': 'off',
    'import-x/no-duplicates': 'off',
    'import-x/no-named-default': 'off',
    'import-x/no-webpack-loader-syntax': 'off',
  },
}

export default config
