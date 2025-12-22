import React from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function reducer(state,action){
    switch(action.type)
    {
        case 'add':
            return state+action.num
        case 'minus':
            return state-action.num
    }
    return state
}

export default function Trap() {
    //解决闭包陷阱
    // const [count, setCount] = useState(0)
    const [count,dispatch]=useReducer(reducer,0)
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(count),
    //             setCount((pre)=>{return pre+1})
    //     }, 1000)
    // }, [])
    return (
        <div>
            {count}
        </div>
    )
}
