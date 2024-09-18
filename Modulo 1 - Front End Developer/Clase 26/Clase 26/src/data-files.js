import { LiaJsSquare } from "react-icons/lia"
import { FILE_ICONS_NAME } from "./utils/constants"

export const files = [

{
    tipo: 'folder',
    title: 'src',
    archives: [
        {
            tipo: 'file',
            title: 'App.jsx',
            icon: FILE_ICONS_NAME.JSX,
            id: 2 
        },
        {
            tipo: 'file',
            title: 'data-example.js',
            icon: FILE_ICONS_NAME.JS,
            id: 3
        },
        {
            title: 'components',
            tipo: 'folder',
            icon: FILE_ICONS_NAME.FOLDER,
            id: 6,
            archives: [
                {
                    tipo: 'file',
                    title: 'Button.jsx',
                    icon: FILE_ICONS_NAME.JSX,
                    id: 2 
                },
                {
                    tipo: 'file',
                    title: 'style.css',
                    icon: FILE_ICONS_NAME.CSS,
                    id: 3
                },
            ]
        }
    ],
    icon: FILE_ICONS_NAME.FOLDER,
    id: 1
},
{
    tipo: 'file',
    title: 'index.html',
    icon: FILE_ICONS_NAME.HTML,
    id: 4
},
{
    tipo: 'file',
    title: '.gitignore',
    icon: FILE_ICONS_NAME.GITIGNORES,
    id: 5
}
]