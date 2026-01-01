import React from 'react'

export default function Border({ Element, children}) {
    const style = {
        //在jsx中直接写css;
        border: '3px solid #000',
        borderStyle: 'solid',
        borderImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxd9cVBI86T5FBKOdUxf_5oJRh2tHta5Zhtg&s")',
        borderImageSlice: '30%'
    }

    return (
        <div className='bd_box' style={style}>
            {Element}
            
            {
                // 插槽的方式  
            children
            }
        </div>
    )
}
