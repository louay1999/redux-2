import { createSlice } from "@reduxjs/toolkit";


const initialState=[{
    id:1,
    description:"cooking to do",
    isDone:false
}]
const todoSlice=createSlice(
    {
        name:"todo",
        initialState,
        reducers:{
            newTask:(state,action)=>{
                 state.push(action.payload)

            },
            complited:(state,action)=>{
                const task=state.find(task=>task.id===action.payload)
            if(task){
                task.isDone=true
            }    
            }
            
        }

    }

);
export const {newTask,complited}= todoSlice.actions;
export default todoSlice.reducer;
