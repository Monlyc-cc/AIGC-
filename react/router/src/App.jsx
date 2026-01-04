import React from 'react'
import Login from './views/login/Login.jsx'
import Home from './views/home/Home.jsx'
import Class from './views/class/Class.jsx'
import Leetcode from './views/leetcode/Leetcode.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


export default function App() {
    return (
        <div>
            {/*开辟一个路由空间*/}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to={"/login"} />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/home' element={<Home />}>
                        <Route path='/home/class' element={<Class />}></Route>
                        <Route path='/home' element={<Navigate to={"/home/class"} />}></Route>
                        <Route path='/home/leetcode' element={<Leetcode />}></Route>
                    </Route>
                    <Route path='*' element={<h2>404 NOT FOUND</h2>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
