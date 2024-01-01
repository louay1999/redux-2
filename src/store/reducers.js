
const initialState = [{id:1,description:"to do check point",isDone:false}]

const todoReducer = (state=initialState,action)=> 
{switch (action.type){
    case "ADD_TASK":
        
        return [...state,action.payload]

    default:
        return state;
}}
export default todoReducer