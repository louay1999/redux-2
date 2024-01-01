import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "../reduxToolkit/todoSlice";

export default function AddTask() {
    const [description,setDescription]= useState ("")
    const dispatch=useDispatch();
    const handleSubmit=()=>{
        const newtodo={
            id:new Date(),
            description,
            isDone:false
        }
        dispatch(newTask(newtodo))
        setDescription ("")
    }
  return (
    <div>
      <input type="text"value={description} onChange={(e)=>setDescription(e.target.value)} />
      <button onClick={handleSubmit}>AddTask </button>
      
    </div>
  );
}
