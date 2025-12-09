import Child from './Child.jsx'
export default function Parent() {
const state={
  name:'俊杰',
}
  return (
    <div>
      <h2>父组件{state.name}</h2>
      <Child msg={state.name} />
    </div>
  )
}
