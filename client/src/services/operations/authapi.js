import {toast} from "react-hot-toast"
import { apiconnector } from "../apiconnector"


import {setLoading,setSignUpData,setToken} from "../../slices/authSlice"
import {setUser} from "../../slices/profileSlice"
import {setEmail,setFlags,setLevel,setScore,setquestionNo} from "../../slices/gameSlice"

export function signup(teamname,email,password,confirmpwd,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading..")
        dispatch(setLoading(true))
        try {
            const response = await apiconnector("POST",
            "http://localhost:3000/auth/signup",
            {
                teamname,
                email,
                password,
                confirmpwd
            })

            console.log("signup resp ",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("SignUp Successfull")

        } catch (error) {
            console.log(error,"frotnend");
            
        }finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
    }
}
export function login(email,password,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading..")
        dispatch(setLoading(true))
        try {
            const response = await apiconnector("POST",
            "http://localhost:3000/auth/login",
            {
                email,
                password
            })
        console.log(response);
        if(!response){
            throw new Error(response.data.message)
        }
        toast.success("Login Succesfull")
        try {
            const gresp = await apiconnector("POST","http://localhost:3000/userd/user",{
                email
            })
            console.log(gresp);
            if(!gresp){
                throw new Error(gresp.data.message)
            }
            console.log(gresp.data.user.game.questionNo);
            dispatch(setquestionNo(gresp.data.user.game.questionNo))
            dispatch(setScore(gresp.data.user.teamPoints))
            dispatch(setLevel(gresp.data.user.game.level))
        } catch (error) {
            console.log("api gresp error",error);
        }
        dispatch(setToken(response.data.token))
        dispatch(setUser({
            ...response.data.user , image:response.data.user.image
        }))
        dispatch(setEmail(email))
        localStorage.setItem("token",JSON.stringify(response.data.user.token))
        navigate('/')
        } catch (error) {
            console.log("login api error");
            toast.error("Login Error");
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
    }
}