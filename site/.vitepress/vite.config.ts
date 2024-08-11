// import { defineConfig } from "vitepress";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
// import vue from '@vitejs/plugin-vue'
// import { VitePluginVitepressDemo } from 'vite-plugin-vitepress-demo';
// import VitePluginVitepressDemo from "vite-plugin-vitepress-demo"
// import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'


export default defineConfig({
    // plugins: [vueJsxPlugin(), VitePluginVitepressDemo()]
    plugins: [vueJsxPlugin()]
})


// vite.config.js



// export default defineConfig({
//     plugins: [
//         legacy({
//             targets: ['defaults', 'not IE 11']
//         })
//     ]
// })
