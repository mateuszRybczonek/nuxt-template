const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-clean-order',
    'stylelint-config-standard-vue',
  ],
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.cache/**',
    '**/.data/**',
    '**/.nitro/**',
    '**/.nuxt/**',
    '**/.output/**',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          /** Tailwindcss v4 */
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'plugin',
          'reference',

          /** Tailwindcss v3 */
          'tailwind',
          'apply',
          'layer',
          'config',

          /** Tailwindcss v1, v2 */
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          '/.+/': [String.raw`/^v-bind\(.+\)/`, String.raw`/theme\(.+?\)/`],
        },
      },
    ],
    'function-no-unknown': [true, { ignoreFunctions: ['theme', 'v-bind'] }],
    'import-notation': 'string',
    'property-no-vendor-prefix': null,
  },
  defaultSeverity: 'error',
  reportDescriptionlessDisables: true,
  reportNeedlessDisables: true,
}

export default config
