import React from 'react'
import { useReducer } from 'react'
import {produce} from 'immer'
function reducer(state, action) {
    switch (action.type) {
        case "add":
            return produce(state,(state)=>{
                state.a.b.c+=action.num;
            });
        case "minus":
            return produce(state,(state)=>{
                state.a.b.c-=action.num;
            });
        default:
            return produce(state,(state)=>{
                state=state
            })
    }

}

export default function UseReducer() {
    const [res, dispatch] = useReducer(reducer, null, () => {
        return {
            a: {
                b: {
                    c: 111
                }
            }
        }
    })
    return (
        <div>
            <button onClick={() => { dispatch({ type: "add", num: 1 }) }}>加</button>
            <button onClick={() => { dispatch({ type: "minus", num: 1 }) }}>减</button>
            <h2>{JSON.stringify(res)}</h2>
        </div>
    )
}
