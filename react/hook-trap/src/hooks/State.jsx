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

    // useState 里面可以加一个函数。根据函数返回值进行使用，但是函数不能是异步函数
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

// 浏览器渲染页面时， js执行与渲染不能同步执行， 渲染页面会根据dom元素进行渲染， 但是js可能会修改dom元素，如果js与渲染同时执行会导致出错。
// react 渲染页面的过程是， 先执行js同步代码， 然后根据dom元素渲染页面， 再执行异步js代码，这个循环

// 而useEffect是异步代码，在当前渲染结束后才执行
// LayoutEffect 则是tongbu     