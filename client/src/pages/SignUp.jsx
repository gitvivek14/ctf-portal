import React, { useState } from 'react'
import "./signup.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from "../services/operations/authapi"

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirm_pass: "",
        TeamName: ""
    })

    const { email, password, confirm_pass, TeamName } = formData;
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(signup(TeamName, email, password, confirm_pass, navigate))
        setFormData({
            email: "",
            password: "",
            confirm_pass: "",
            TeamName: ""
        })

    }
    return (
        <div classNameName='w-full h-full max-w-max mx-auto p-4 flex flex-col items-center justify-evenly bgg'>
            <div classNameName='mx-auto w-full max-w-max flex flex-col items-center justify-center p-4'>
                <div>
                    <h1 classNameName='text-green-300 text-3xl p-3' style={{ fontFamily: "Hack" }}>
                        Welcome to Matrix
                    </h1>
                </div>

            </div>
            <div classNameName='mx-auto flex flex-col items-center justify-center'>
                <div classNameName='h-full mx-auto'>
                    <form className="container" action="" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <div className="input-content">
                                <div className="input-dist">
                                    <div className="input-type">
                                        <input className="input-is" type="text" required=""
                                            placeholder="TeamName" name='TeamName' value={TeamName}
                                            onChange={handleOnChange} />
                                        <input className="input-is" type="email"
                                            required="" placeholder="Email" name='email' value={email} onChange={handleOnChange} />
                                        <input
                                            className="input-is"
                                            type="password"
                                            required=""
                                            name='password'
                                            placeholder="Password"
                                            value={password}
                                            onChange={handleOnChange}
                                        />
                                        <input
                                            className="input-is"
                                            type="password"
                                            required=""
                                            name='confirm_pass'
                                            placeholder="Confirm-Password"
                                            value={confirm_pass}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="submit-button">SignUp</button>
                    </form>

                </div>


            </div>

        </div>
    )
}

export default SignUp