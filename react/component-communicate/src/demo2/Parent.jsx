import {useState} from 'react'
import Child from "./Child.jsx"
export default function Parent() {
    let [count,setCount]= useState(1);
    function getNum(n)
    {
        setCount(n)
    }
    return (
        <div>
            <h2>父组件2--{count}</h2>
            <Child getNum={getNum}></Child>
        </div>
    )
}
