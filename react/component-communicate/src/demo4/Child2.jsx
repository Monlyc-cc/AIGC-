import {useContext} from 'react'
import {Context} from './Parent'

export default function Child2(props) {
    const msg=useContext(Context)
    console.log(msg)
    return (
        <div>
            <h4>孙子组件4.2---{msg}</h4>
        </div>
    )
}
