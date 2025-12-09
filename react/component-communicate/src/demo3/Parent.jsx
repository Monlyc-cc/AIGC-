import { useState } from "react"
import Child1 from "./Child1.jsx"
import Child2 from "./Child2.jsx"

export default function Parent() {
    let [str, setStr] = useState(null);
    function fn(s) {
        setStr(s);
    }
    return (
        <div>
            <h2>父组件3</h2>
            <Child1 fn={fn} />
            <Child2 str={str} />
        </div>
    )
}
