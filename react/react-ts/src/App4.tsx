import React, { useReducer } from 'react'

export default function App4() {

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
  return (
    <div>
      <div onClick={() => { dispatch({ type: 'add', num: 2 }) }}>加</div>
      <div onClick={() => { dispatch({ type: 'minus', num: 1 }) }}>减</div>
    </div>
  )
}
