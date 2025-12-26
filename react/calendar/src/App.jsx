import React from 'react'
import Calendar from './Calendar'
export default function App() {
  return (
    <div>
      <Calendar onchange={(year,month,day)=>{
        alert(year+'/'+month+'/'+day)
      }}></Calendar>
    </div>
  )
}
