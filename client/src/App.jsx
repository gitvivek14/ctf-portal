import { useState } from 'react'
import Auth from './pages/Auth'
import {Route,Routes} from "react-router-dom"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from "../src/pages/Home"

function App() {

  return (
    <>
    <div className="w-[100vw] h-[100vh] min-h-screen bg-[#000814] overflow-y-auto ">
      <Routes>
        <Route path='/' element={<Auth></Auth>}>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}>
        </Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      

    </div>
      
    </>
  )
}

export default App
