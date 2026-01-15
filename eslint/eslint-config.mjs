import path from 'node:path'

import js from '@eslint/js'
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import oxlint from 'eslint-plugin-oxlint'
import unicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'
import neostandard from 'neostandard'
import tsEslint from 'typescript-eslint'

import baseConfigs from './eslint-base-config.mjs'
import importConfig from './eslint-import-config.mjs'
import stylisticConfig from './eslint-stylistic-config.mjs'
import typescriptConfig from './eslint-typescript-config.mjs'
import unicornConfig from './eslint-unicorn-config.mjs'
import vueConfig from './eslint-vue-config.mjs'

function vueRules(name) {
  const config = pluginVue.configs[`flat/${name}`].find(
    (configObject) => configObject.name === `vue/${name}/rules`,
  )

  if (config) {
    // These rules are all warnings. We want them to be errors.
    const rules = { ...config.rules }

    for (const [ruleName, value] of Object.entries(rules)) {
      rules[ruleName] =
        typeof value === 'string' ? 'error' : ['error', ...value.slice(1)]
    }

    return {
      name: `override/vue/${name}/rules`,
      rules,
    }
  }

  return {}
}

const config = defineConfigWithVueTs([
  js.configs.recommended,

  // We use StandardJS style (with a few exceptions). This config loads
  // plugins and config for eslint, @stylisitc, promise, n, and import-x.
  ...neostandard({
    files: ['**/*.{js,cjs,vue}'],
    filesTs: ['**/*.vue'],
    ts: true,
  }),

  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  ...pluginVue.configs['flat/recommended'],
  eslintComments.recommended,
  unicorn.configs['recommended'],
  vueRules('strongly-recommended'),
  vueRules('recommended'),
  vueTsConfigs.recommendedTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  eslintConfigPrettier,

  // My overrides
  ...baseConfigs,
  importConfig,
  stylisticConfig,
  typescriptConfig,
  unicornConfig,
  {
    name: 'disable/ts/rules',
    files: ['**/*.{ts,vue}'],
    rules: {
      // See https://typescript-eslint.io/rules/no-redundant-type-constituents#when-not-to-use-it
      '@typescript-eslint/no-redundant-type-constituents': 'off',
    },
  },
  vueConfig,
  ...oxlint.buildFromOxlintConfigFile(
    path.resolve(import.meta.dirname, '../oxlint.config.jsonc'),
  ),
])

export default config
