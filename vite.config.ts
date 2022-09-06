import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv,type ConfigEnv, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { wrapperEnv} from "./build/utils";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({mode}:ConfigEnv):UserConfig=>  {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT} = viteEnv
  return {
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server:{
    host: "0.0.0.0",
    port: VITE_PORT,
    proxy: {
      "/api":{
        target: " https://mock.mengxuegu.com/mock/6317045d4944d71a56f25f0d",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,"")
      }
    } 
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia",],
      resolvers: [ElementPlusResolver()],
      dts: "./auto-imports.d.ts",
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}});
