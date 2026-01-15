const config = {
  name: 'override/vue',
  files: ['**/*.vue'],
  rules: {
    'vue/define-props-destructuring': [
      'off', // Turn this on when bug is fixed
      {
        destructure: 'always',
      },
    ],
    'vue/no-v-html': 'off', // We use v-html in a few places
  },
}

export default config
