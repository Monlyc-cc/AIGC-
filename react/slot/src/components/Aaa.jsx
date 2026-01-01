import React from 'react'
import { Children } from 'react'
export default function Aaa({ children }) {
    console.log(children) // children 成为一个数组对象 接收多个子组件
    return (
        <div>

            {
                //将传入的子组件直接调用
                children
            }


            {
                // 可以将children当作数组类型使用 ， 操作传入的每一个子组件
                children.map((item, index) => {
                    return <div key={index}>{item}</div>
                })

                /// 缺点 ： 1.当传入子组件为 1 时 ， children 是对象
                //         2. 当传入的子组件数量为多个是， children 对象是数组 ，使用map方法会报错
            }


            {
                // 新的Children 对象 用来弥补类型可能发生的类型错误
                //  Children.map(object, 遍历对象时的逻辑)   
                Children.map(children, (item, index) => {
                    return <div key={index}>{item}</div>
                })

                // 优点：能够区分 组件children是数组，还是数组
                //      且能够将数组内部的二维组件结构

            }

            {

            }
        </div>
    )
}
