import { createContext, useState } from "react"
import Child1 from "./Child1.jsx"
export const Context=createContext() //创建一个上下文对象

export default function Parent() {
    //Provider 叫提供 Consumer叫注入
    return (
        <div>
            <h2>父组件4</h2>
            <Context.Provider value={"这是父组件中的数据"}>
            <Child1  />
            </Context.Provider>
        </div>
    )
}
