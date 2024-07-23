import monousoooo from '@antfu/eslint-config'

export default monousoooo({
  vue: true,
  vueJsx: false,
  typescript: true,
  gitignore: true,
  markdown: true,
  ignores: [
    'types/auto-imports.d.ts',
    'types/components.d.ts',
    'public',
    'tsconfig.*.json',
    'tsconfig.json',
    'src/env.d.ts',
    'src/components/qiun-data-charts',
    'src/components/qiun-error',
    'src/components/qiun-loading',
    'src/components/u-charts',
  ],
}, {
  rules: {
    'no-console': 0,
    'style/quote-props': 0,
  },
})
