import { createStore } from "redux";
import reducers from "./rootReducers";
const store = createStore(reducers)

console.log(store.getState(reducers.todoTask))
export default store