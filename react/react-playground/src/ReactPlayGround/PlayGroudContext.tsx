import { createContext, useEffect, useState, type PropsWithChildren } from 'react'
import { type FileItem,type Files } from '../Files/types'
import { getLanguageByFilename, createFileByname, initFiles } from '../Files/FilesUtils.ts'
// 利用 createContext 函数 创建一个上下文对象， 这个对象是响应式的



// 定义ts 的类型约束


// 全局对象的约束
export interface PlayGroudContextType {

    // interface 接口 ， 使用方法类比与java的抽象类， 约束好对象的属性类型，
    // 但是比抽象类更加进一步约束了，被实现函数的 输入值 与 输出值
    selectedFilename: string
    files: Files
    setSelectedFilename: (filename: string) => void
    setFiles: (files: Files) => void
    removeFile: (filename: string) => void
    updateFileName: (oldfilename: string, newfilename: string) => void
    addFile: (name: string) => void
}

// 创建一个空的全局对象
export const PlayGroudContext = createContext<PlayGroudContextType>({
    selectedFilename: 'App.tsx',
} as PlayGroudContextType)

// 类型断言语，强行定义类型




// 文件对象创建函数




export const PlayGroudContextProvider = (props: PropsWithChildren) => {
    const [files, setFiles] = useState<Files>({})
    const [selectedFilename, setSelectedFilename] = useState<string>('main.tsx')

    // 增加新的文件
    const addFile = (name: string) => {
        setFiles((pre) => {
            return {
                ...pre,
                [name]: createFileByname(name),
            }
        })
    }
    //删除文件
    const removeFile = (filename: string) => {
        setFiles((pre) => {
            delete pre[filename]
            return { ...pre }
        })
    }
    // 更新文件名，并根据新文件名，改变文件类型
    const updateFileName = (oldfilename: string, newfilename: string) => {
        if (oldfilename == newfilename || !newfilename || !files[oldfilename]) {
            return
        }

        setFiles((pre) => {
            const rev = { ...pre }
            rev[newfilename] = rev[oldfilename]
            delete rev[oldfilename]

            rev[newfilename].name = newfilename // 更改文件名
            rev[newfilename].language = getLanguageByFilename(newfilename) // 依据文件名，改变文件的类型
            return rev
        })
    }

    useEffect(()=>{
        initFiles().then((res)=>{
            console.log('res'+res);
            setFiles(res)
        })
    },[])
    return (<PlayGroudContext.Provider value={{
        selectedFilename,
        files,
        setSelectedFilename,
        setFiles,
        addFile,
        removeFile,
        updateFileName,
    }} >
        {props.children}
    </PlayGroudContext.Provider>)
}


