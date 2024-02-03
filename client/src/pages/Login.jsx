import React,{useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from "../services/operations/authapi"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      })

      const {email,password} = formData;
      const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }

      const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login(email,password,navigate))
        console.log(formData)
        setFormData({
            email:"",
            password:""
        })
      }
    return (
        <div className='w-full h-full max-w-max mx-auto p-4 flex flex-col items-center justify-evenly bgg'>
            <div className='mx-auto w-full max-w-max flex flex-col items-center justify-center p-4'>
                <div>
                    <h1 className='text-green-300 text-3xl p-3' style={{ fontFamily: "Hack" }}>
                        Welcome to Matrix
                    </h1>
                </div>
            </div>
            <div className='mx-auto flex flex-col items-center justify-center'>
                <div className='h-full mx-auto'>
                    <form class="container" onSubmit={handleSubmit}>
                        <div class="input-container">
                            <div class="input-content">
                                <div class="input-dist">
                                    <div class="input-type">
                                        <input class="input-is" 
                                        type="email"
                                         required="" placeholder="Email" 
                                        onChange={handleOnChange}
                                        value={email}
                                        name='email'
                                        />
                                        <input
                                            class="input-is"
                                            type="password"
                                            name='password'
                                            value={password}
                                            required=""
                                            placeholder="Password"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="submit-button">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login