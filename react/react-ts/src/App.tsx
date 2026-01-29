import React, { type JSX } from 'react'

interface AaaProps{
  name:string;
  age?:number;
  content:React.ReactNode
}
const content:JSX.Element=<div>xxxxx</div>



const Aaa2:React.FunctionComponent<AaaProps>=(props) =>{
   return <div>aaa2,{props.name},{props.content}</div>
}


export default function App() {
  function Aaa(props:AaaProps) {
    //函数返回类型， 有函数返回值自己推导
    // ts 将 js 写法 扭回到强类型语言写法， 对于复杂数据的传输与接受 将用 复杂类型替代 ，而不能使用解构等语法
    return (<div>{props.name}{props.content}</div>)
  }
  return (
    <div>
      <Aaa name={'子涵'} content={content}></Aaa>
    </div>
  )
}
