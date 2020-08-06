import { combineReducers } from "redux"
import imageReducer from "./image/imageReducer"
export default combineReducers({image:imageReducer})