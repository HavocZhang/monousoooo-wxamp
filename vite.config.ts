import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniPages from '@uni-helper/vite-plugin-uni-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // make sure put it before `Uni()`
    UniPages(),
    Components({
      resolvers: [WotResolver()],
      dts: 'types/components.d.ts',
      dirs: ['src/components'],
    }),
    uni(),
  ],
})
