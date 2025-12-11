import React from 'react'
import { useState } from 'react'
export default function App() {

  const [count, setCount] = useState(0)

  const [obj,setObj]=useState(()=>{
    return "xxx";
  })
  
  function add() {
    setCount(count+1)
  }
  console.log("jhhh");
  return (
    // 使用 exprot default 抛出的函数 无需{} 引入
    //使用 exprot 抛出的函数 需{} 引入
    <div>
      <div>当前计数：{count}</div>
      <button onClick={add}>加一</button>
    </div>
  )
}
