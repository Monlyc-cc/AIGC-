import React from 'react'
import './home.css'
import { Link, Outlet } from 'react-router-dom'
export default function home() {

  return (
    <div className='home'>
      <header className='header'><span>后台管理系统</span><span>admin</span></header>
      <main className='body'>
        <aside>
          <ul>
            <li><Link to={"/home/class"}>课程</Link></li>
            <li><Link to={"/home/leetcode"}>算法</Link></li>
          </ul>
        </aside>
        <main className='content'>
          <Outlet></Outlet>
        </main>
      </main>
    </div>
  )
}
