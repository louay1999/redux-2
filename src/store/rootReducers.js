import { combineReducers } from "redux";
import todoReducer from "./reducers";





const rootReducer = combineReducers({
    todoTask:todoReducer
})


export default rootReducer