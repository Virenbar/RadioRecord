// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      // '@stylistic/quotes': ['warn','double'],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'function' }],
      // Conflicts
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/padding-line-between-blocks': ['error', 'never'],
    },
  },
);
