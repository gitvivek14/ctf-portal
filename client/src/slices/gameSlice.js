import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    user:"",
    score:"",
    flagsCaptured:"",
    level:"",
    email:"",
    questionNo:"",
    loading: false,
  }

const gameSlice = createSlice({
    name:"game",
    initialState:initialState,
    reducers:{
        setScore(state,value){
            state.score=value.payload
        },
        setLevel(state,value){
            state.level=value.payload;
        },
        setFlags(state,value){
            state.flagsCaptured=value.payload
        },
        setEmail(state,value){
            state.email=value.payload;
        },
        setquestionNo(state,value){
            state.questionNo=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload
        }
    }
})

export const{setFlags,setLevel,setScore,setEmail,setquestionNo,setLoading} = gameSlice.actions
export default gameSlice.reducer