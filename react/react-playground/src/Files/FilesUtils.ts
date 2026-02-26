import { type FileItem, type Files } from './types'
import { LANGUAGE_MAP } from './constants'


export const getLanguageByFilename = (filename: string | undefined) => {
    let language = filename?.split('.').pop() || 'js'
    return LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP]
}

// 创建文件对象， 通过文件名
let count = 1;
export const createFileByname = (name: string | undefined): FileItem => {

    return {
        name: name || `file${count++}`,
        value: '',
        language: getLanguageByFilename(name),
    }
}

// 预处理文件组对象Files
export async function initFiles(): Promise<Files> {

    // 返回初始化的Files对象
    // 项目入口文件名
    let main = await import('../ReactPlayGround/templates/main.tsx?raw');
    // 应用组件文件名
    let App = await import('../ReactPlayGround/templates/App.tsx?raw');
    let AppCss = await import('../ReactPlayGround/templates/App.css?raw');
    // es moudle 导入映射
    let import_map_json = await import('../ReactPlayGround/templates/import-map.json?raw');
    return {
        'main.tsx': {
            name: 'main.tsx',
            value: main.default,
            language: 'typescriptreact',
        },
        'App.tsx': {
            name: 'App.tsx',
            value: App.default,
            language: 'typescriptreact',
        },
        'App.css': {
            name: 'App.css',
            value: AppCss.default,
            language: 'css',
        },
        'import_map.json': {
            name: 'import_map.json',
            value: import_map_json.default,
            language: 'json',
        },
    }

}


