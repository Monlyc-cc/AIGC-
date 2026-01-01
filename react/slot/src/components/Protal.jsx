import React, { Children, useEffect ,useImperativeHandle} from 'react'
import { createPortal } from 'react-dom'

function getAttach(attach) {
    if (typeof attach === 'string') {
        return document.querySelector(attach)
    }
    if (attach instanceof HTMLElement) {
        return attach
    }
    return document.body;
}
export default function Protal({ children, attach,ref }) {
    const container=<div className='protal'>
        {children}
    </div>
    return createPortal(container, getAttach(attach))
}
