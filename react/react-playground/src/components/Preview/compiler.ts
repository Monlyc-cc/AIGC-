import { type Files } from '../../Files/types'
import { ENTRY_FILE_NAME } from '../../Files/constants'
import { transform } from "@babel/standalone"
import type { PluginObj } from '@babel/core'
import { padStart } from 'lodash'
import { CssToJS, JsonToJS } from './utils'
const initCode = (filename: string, code: string) => {

    if (filename.endsWith('.tsx') || filename.endsWith('.jsx')) {
        const regxCode = /import\s+React/g
        if (regxCode.test(code)) {
            return code
        }
        return `import React from 'react';\n` + code
    }
    return code

}
export const babelTransform = (filename: string, code: string, files: Files) => {

    const initCodeResult = initCode(filename, code) // 先做代码的预处理

    let result = ''
    if (!initCodeResult) return result
    try {
        result = transform(initCodeResult, {
            presets: ['react', 'typescript'], // 预设插件，react和typescript， 将react，ts 语法编译为js
            filename,// 文件名，用于错误提示
            plugins: [customResolve(files)], // 插件, 可以放入而外的编译程序，编译相应语法
            // 需要一个插件，在编译的过程中，将import引入的文件路径，替换为，blob 路径
            retainLines: true // 保留原有格式
        }).code!
    }
    catch (error) {
        console.error('编译出错', error)
    }

    return result
}
export const customResolve = (files: Files): PluginObj => {
    return {
        visitor: {
            ImportDeclaration(path) {
                const modulepath = path.node.source.value
                if (modulepath.startsWith('.')) {
                    // 如果引入的文件是相对路径，说明文件是自己写的，我们需要把那份文件自己处理成blob资源引入到现在的文件中
                    //  相当于递归编译，将主入口文件有关的引入全部·处理一遍，使得代码可以成功运行
                    const file = getModuleFile(modulepath, files)
                    if (!file) return
                    if (file.language == 'css') {
                        //如果是css文件，就不处理成blob，而是把css转换成js语法
                        path.node.source.value = CssToJS(file)
                    }
                    else if (file.language == 'json') {
                        path.node.source.value = JsonToJS(file)
                    }
                    else {
                        // 引入的文件，可能引入了其它文件，所以递归编译引入文件，
                        path.node.source.value = URL.createObjectURL(new Blob([babelTransform(file.name!, file.value!, files)], { type: 'application/javascript' }))
                    }
                }
            }
        }
    }
}
export const getModuleFile = (modulepath: string, files: Files) => {
    const filename = modulepath.split('/').pop() || ""
    const file = files[filename]
    if (!file) return undefined
    return file
}


export const compileCode = (files: Files) => {
    // 编译项目文件
    const main = files[ENTRY_FILE_NAME]
    return babelTransform(ENTRY_FILE_NAME, main?.value!, files)

}