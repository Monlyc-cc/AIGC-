import React, { useCallback, useReducer, useMemo } from 'react'

export default function App5() {

    interface data {
        result: number
    }
    interface action {
        type: string
        num: number
    }
    const reducer = (state: data, action: action) => {
        switch (action.type) {
            case 'add':
                return {
                    result: state.result + action.num
                }
            case 'minus':
                return {
                    result: state.result - action.num
                }
            default:
                return state
        }

    }
    const [res, dispatch] = useReducer(reducer, { result: 0 })

    const count=useMemo(()=>{ 
        //缓存函数的执行结果，不会每次都重新执行
        console.log('useMemo')
        return res.result*10
    },[])


    return (
        <div>
            <div onClick={() => { dispatch({ type: 'add', num: 2 }) }}>加</div>
            <div onClick={() => { dispatch({ type: 'minus', num: 1 }) }}>减</div>
            {res.result}---{count}
        </div>
    )
}
