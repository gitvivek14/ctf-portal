import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
const persistedState = localStorage.getItem("reduxgameState")
  ? JSON.parse(localStorage.getItem("reduxgameState"))
  : {
      teamname: "",
      score: "",
      flagsCaptured: "",
      level: "",
      email: "",
      questionNo: "",
      questions:[],
      loading: false,
    };
const initialState = {
        ...persistedState
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
        },
        setquestions(state,value){
            state.questions = value.payload;
        },
        setteamName(state,value){
            state.teamname= value.payload;
        }
    }
})
const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxgameState", serializedState);
    } catch(err) {
        console.log("errrrrrrr",err)
      // ignore write errors
    }
  };




// gameSlice.subscribe(() => {
//     saveState(gameSlice.getState());
//   });

export const{setFlags,setLevel,setScore,setEmail,setquestionNo,setLoading,setquestions,setteamName} = gameSlice.actions
export default gameSlice.reducer