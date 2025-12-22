
import React, { useEffect, useState,memo, useCallback, useMemo } from 'react'

const  Child= memo((props)=> {
    // memo 包装的组件， 当父组件传入的值没有变更，则 组件不重新加载
    console.log(props.num)
    return <div>{props.num}</div>
})

export default function Memo() {
    const [num, setNum] = useState(0)
    const [count,setCount]=useState(2)
    useEffect(()=>{

        const timer=setInterval(()=>{
            
            setNum((pre)=>{return pre+1 })
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    })
    const callback = useCallback(()=>{

    },[])


    const count2=useMemo(()=>{
        return count+Math.random();
    },[])

    return (
        <div>
            <Child num={count2}  fm={callback}/>
        </div>
    )
}
