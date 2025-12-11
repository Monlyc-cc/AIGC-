import React from 'react'
import './MovieItem.css'
export default function MovieItem(props) {
    return (
        <div className="list_item">
            <div className="item_img"><img src={props.Img} alt="" /> </div>
            <div className="item_name">{props.nm}</div>
            <div className="item_score">{props.sc}</div>
        </div>
    )
}
