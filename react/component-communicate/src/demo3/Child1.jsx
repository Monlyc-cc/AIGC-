import React from 'react'

export default function Child1(props) {
    let state = {
        num: "3.1中字符串",
    }
    function fn() {
        props.fn(state.num)
    }
    return (
        <div>
            <h3>子组件1---{state.num}</h3>
            <button onClick={fn}>3.1</button>
        </div>
    )
}
