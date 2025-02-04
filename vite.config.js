import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import sass from 'sass';

// https://vite.dev/config/
export default defineConfig({
  server:{
    open: true,   //自动浏览
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  },
  plugins: [vue(),
    Icons({
      compiler: 'vue3', 
      customCollections: {
        // 自定义图标集合
      },
      autoInstall: true // 自动安装缺少的图标包
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
