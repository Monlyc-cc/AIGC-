import React from 'react'
// import './App.css'
import Border from './components/Border'
import Aaa from './components/Aaa'
export default function App() {
  const Element = (<div>123</div>)
  return (
    <div>
      {/* {
        //父向子传值 方式1 
      }
      <Border Element={Element} />


      {
        //父向子传值 方式2 插槽
      }
      <Border>
        <div>456</div>
      </Border> */}
      <div className="container">
        <Aaa>
          {
          [
            <a href="#">首页</a>,
            <a href="#">关于</a>,
            <a href="#">我的</a>,
            [<a href="#">我的</a>, <a href="#">我的</a>]
          ]
          }

        </Aaa>
      </div>
    </div>
  )
}
