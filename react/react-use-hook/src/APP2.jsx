import React, { useState } from 'react'
import useLifeCyclefrom from './hooks/useLifeCycle'
export default function APP2() {
    const Child = () => {
        useLifeCyclefrom(() => { console.log('open')}, () => { console.log('close') } )
        return (<div>Child子组件</div>)
    }
    const [show, setShow] = useState(false)
    console.log(show);

    return (
        <div>
            <h1 onClick={() => { setShow(!show) }}>APP2</h1>
            {
                show && <Child></Child>
            }
        </div>
    )
}
