import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    user:"",
    score:"",
    flagsCaptured:"",
    level:"",
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
        }
    }
})

export const{setFlags,setLevel,setScore} = gameSlice.actions
export default gameSlice.reducer