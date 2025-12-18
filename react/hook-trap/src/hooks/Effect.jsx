import React from 'react'
import { useState, useEffect } from 'react'

function getData() {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve(100)
        }, 1);
    })
    return data;

}
export default function Effect() {

    // useState 里面可以加一个函数。根据函数返回值进行使用，但是函数不能说异步函数
    const [num, setNum] = useState(() => { return 1 });
    const [age, setAge] = useState(18);
    function add() {
        setNum((pre) => {
            console.log(pre)// 拿到num被修改前的状态
            setAge(age + 1);
            return pre + 1
        });
    }
    useEffect(() => {
        console.log(1)
        const timer=setInterval(()=>{
            setNum((pre)=>{
                return pre+1;
            })
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <div onClick={add}>{num}---{age}</div>
    )
}
