import {combineReducers} from "redux"
import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice"
import gameSlice from "../slices/gameSlice"
const rootReducer = combineReducers({
    auth:authSlice,
    profile:profileSlice,
    game:gameSlice
})
export default  rootReducer