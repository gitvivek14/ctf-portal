import {toast} from "react-hot-toast"
import { apiconnector } from "../apiconnector"
import {setFlags,setLevel,setScore,setLoading,setquestions} from "../../slices/gameSlice"


export function control(questionNo, level, teamPoints, email, ans){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading..")
        dispatch(setLoading(true))
        try {
            const response = await apiconnector("POST","http://localhost:3000/game/control",{
                questionNo,
                level,
                teamPoints,
                email,
                ans
            })
            if(!response){
                throw new Error(response.data.message)
            }
            toast.success("Updated Succesfull")
        } catch (error) {
            console.log(error);
            
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }

    }
}

export function getQuestions(level){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading..")
        dispatch(setLoading(true))
        try {
            const response = await apiconnector("POST","http://localhost:3000/game/getquestions",{
                level:level
            })
            if(!response){
                throw new Error(response.data.message)
            }
            toast.success("Welcome")
            console.log("prijting resp",response);
            dispatch(setquestions(response.data.data))
        } catch (error) {
            console.log(error);
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
    }
}