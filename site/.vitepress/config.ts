// import { defineConfig } from "vite"

// export default defineConfig({
//     title: "kawa组件库站点"
// })

import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { get } from 'http'
import { defineConfig } from 'vitepress'
import { getNav } from './config/nav'
import { getSidebar } from './config/sidebar'

export default defineConfig({
    title: 'Vue3 - kawa组件库',
    description: 'kawa组件库 - Endless Improvement',
    themeConfig: {
        // nav: getNav(),
        // sidebar: getSidebar()
        nav: [
            { text: "开始使用", link: "/get-started" },
            { text: "组件", link: "/components/button/" },
        ],
        sidebar: [
            {
                text: "指南",
                collapsed: false,
                items: [{ text: "快速开始", link: "/get-started" }],
            },
            {
                text: "基础组件",
                collapsed: false,
                items: [{ text: "Button 按钮", link: "components/button/" }],
            },
        ],
    },
    // 其他 VitePress 配置
    markdown: {
        config(md) {
            md.use(containerPreview);
            md.use(componentPreview);
        }
    }
})
