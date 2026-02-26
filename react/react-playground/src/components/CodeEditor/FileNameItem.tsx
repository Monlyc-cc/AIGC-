import React from 'react'
import styles from './index.module.scss'
interface Props{
  value?: string | undefined
  selected?: boolean
  onClick?: (value:string) => void
}
export default function FileNameItem(props:Props) {

  const value=props.value? props.value : 'title_item'
  const selected=props.selected? props.selected : false
  const onClick=props.onClick? props.onClick : ()=>{}

  return (
    <div className={`${styles['tab-item']} ${selected? styles['actived'] : ''}`} onClick={()=>{onClick(value)}}>
      <span>{value}</span>
      </div>
  )
}
