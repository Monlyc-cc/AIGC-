import Child2 from "./Child2.jsx"
export default function Child1(props) {
    let state = {
        num: "4.1中字符串",
    }
    function fn() {
        props.fn(state.num)
    }
    return (
        <div>
            <h3>子组件4.1---{state.num}</h3>
            <Child2 />
        </div>
    )
}
