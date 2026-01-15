// Force all commit messages to conform to the Conventional Commits specification
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always'],
  },
}

export default config
