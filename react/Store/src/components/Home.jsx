import React from 'react'
import useCountStore from '../store/count'

export default function Home() {
    const count = useCountStore((state) => {
        return state.count;
    })
    const increase= useCountStore((state)=>{
        return state.increase;
    })
    const decrease= useCountStore((state)=>{
        return state.decrease;
    })
    const value=9;
    return (
        <div>
            <button onClick={increase} >增加-{count}</button>
            <button onClick={()=>{decrease(value)}} >减少-{count}</button>

        </div>
    )
}
