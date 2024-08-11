import { text } from "stream/consumers";
import { DefaultTheme } from "vitepress";

export const getSidebar = (): DefaultTheme.Sidebar => {
    return [
        {
            text: 'Button 按钮',
            link: '/components/button/'
        }
        
    ]
}