import { link } from "fs"
import { text } from "stream/consumers"
import { DefaultTheme } from "vitepress"

export const getNav = (): DefaultTheme.NavItem[] => {

    return [
        {

            text: "组件",
            link: "/components/"

        },
        {
            text: 'kawa-GitHub',
            link: 'https://github.com/kawaii993/kawa-tiny-vue',
        }
    ]
}