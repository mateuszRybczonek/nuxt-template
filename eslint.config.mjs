import gitignore from 'eslint-config-flat-gitignore'

import { withNuxt } from './.nuxt/eslint.config.mjs'
import config from './eslint/eslint-config.mjs'

export default withNuxt().prepend(
  {
    // Files we never want to lint
    name: 'eslint/override/ignores',
    ignores: [
      'components.d.ts',
      '**/*.d.ts',
      'pnpm-lock.yaml',
      '!.pnpmfile.cjs',
    ],
  },
  ...config,
  gitignore(),
)
