import React from 'react'
import { useState } from 'react'
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(100)
        }, 1);
    })

}
export default function State() {

    // useState 里面可以加一个函数。根据函数返回值进行使用，但是函数不能说异步函数
    const [num, setNum] = useState(() => {
        return 1;
    });
    function add() {
        setNum((pre) => {
            console.log(pre)// 拿到num被修改前的状态
            return pre + 1
        });

    }
    return (
        <div onClick={add}>{num}</div>
    )
}
