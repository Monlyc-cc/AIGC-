import React, { useRef, useState } from 'react'
import { transform } from '@babel/standalone'
export default function App() {

  const [url, setUrl] = useState('')
  const code = `
  import { useEffect, useState } from "react";
  function App() {
    const [num, setNum] = useState(() => {
      const num1 = 1 + 2;
      const num2 = 2 + 3;
      return num1 + num2
    });
  
    return (
      <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
    );
  }
  
  export default App; 
  `
  function onclick() {
    if (!textareaRef.current) return;
    // 将代码编写区域的jsx or tsx 编译为 js  然后 加密为 url 供 import 请求接收
    const code = textareaRef.current.value
    const res = transform(code, {
      presets: ['react', 'typescript'],
      filename: 'demo.tsx'
    }
    )
    const jsCode = res.code
    console.log(jsCode);
    setUrl(URL.createObjectURL(new Blob([jsCode as string], { type: 'application/javascript' })))

  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div>
      <textarea ref={textareaRef} defaultValue={code} style={{ width: '500px', height: '300px' }}></textarea>
      <button onClick={onclick}>编译</button>
    </div>
  )
}
