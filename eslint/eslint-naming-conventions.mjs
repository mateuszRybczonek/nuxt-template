/**
 * Our naming conventions for various types of identifiers.
 */
const namingConventions = [
  { selector: 'default', format: ['camelCase'], leadingUnderscore: 'forbid' },
  {
    selector: 'import',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'forbid',
  },
  { selector: 'variable', format: ['camelCase'] },
  { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
  { selector: 'objectLiteralProperty', format: null },
  { selector: 'objectLiteralMethod', format: null },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  { selector: 'typeLike', format: ['PascalCase'] },
  {
    selector: 'enum',
    format: ['PascalCase'],
    prefix: ['E'],
    custom: {
      /* Must not end with 's' */ regex: '(?<!Statu)s$',
      match: false,
    },
  },
  {
    selector: 'typeProperty',
    format: null,
    filter: {
      regex: '^update:[a-z][a-zA-Z]*$',
      match: true,
    },
  },
]

export default namingConventions
