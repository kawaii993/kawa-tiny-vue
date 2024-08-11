import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import type { App } from 'vue'
// import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'

// export default {
//     ...DefaultTheme,
//     enhanceApp({ app }) {
//         app.component('Demo')
//     },
// } as Theme

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component('demo-preview', AntDesignContainer);
    }
}
