import MonacoEditor, { type EditorProps, type OnMount } from '@monaco-editor/react'
import { createATA } from './Editor/ata.ts'
import { type FileItem } from '../../Files/types.ts'
export interface Props {
  file: FileItem
  onChange?: EditorProps['onChange']
  options?: EditorProps['options']
}


export default function Editor(props: Props) {

  
  // 编辑器加载完毕执行的回调
  const handleEditorMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_M, () => {
      editor.getAction('editor.action.formatDocument')?.run()
    })

    // 兼容处理 jsx
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    })

    // 类型提示
    const ata = createATA((code, path) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`)
    })

    // 监听编辑器内容变化，更新类型提示
    editor.onDidChangeModelContent(() => {
      ata(editor.getValue())
    })

    ata(editor.getValue())
  }



  return (
    <MonacoEditor
      height="100%"
      language={props.file?.language || 'typescript'}
      path={props.file?.name || 'Demo.tsx'}
      value={props.file?.value || ''}
      onMount={handleEditorMount}
      onChange={props.onChange}
      options={{
        minimap: {
          enabled: false
        },
        fontSize: 14,
        scrollBeyondLastLine: false,
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6
        },
        ...props.options
      }}
    >

    </MonacoEditor>
  )
}
