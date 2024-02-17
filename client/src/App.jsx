import { useState } from 'react'
import Auth from './pages/Auth'
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from "../src/pages/Home"
import Level from './pages/levels/Level'
import { io } from "socket.io-client"
import DashBoard from './pages/Dashboard/DashBoard'
import ZeroLevel from './pages/levels/ZeroLevel'
import PrivateRoute from './components/PrivateRoute'


function App() {
  // const socket  = io("http://localhost:3000")
  // socket.on("welcome",(s)=>{
  //   console.log(`Welcome ${s}`)
  // })
  return (
    <>
      <div className="w-[100vw] h-[100vh] min-h-screen bg-[#000814] overflow-y-auto bghome ">
        <Routes>
          <Route path='/' element={<Auth></Auth>}>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}>
          </Route>
          <Route path='/home' element={
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>
          }></Route>
          <Route path='level/:id' element={
            <PrivateRoute>
              <Level></Level>
            </PrivateRoute>
          }></Route>
          <Route path='dash' element={<DashBoard></DashBoard>}></Route>
          <Route path='/home/level/0' element={<ZeroLevel />}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
