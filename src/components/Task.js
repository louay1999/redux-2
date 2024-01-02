import React,{useState} from 'react'
import { completed, editTask } from '../reduxToolkit/todoSlice'
import { useDispatch } from 'react-redux'
import './Task.css'


export default function Task(props) {
  const [newDescription,setNewDescription]= useState ("")
const [edit,setEdit]=useState(false)
    const{description,id,isDone}=props.todo
    const dispatch=useDispatch();
  return (
    <div>
      <div>
      <h1 style={isDone===true?{color:'green'}:{color:'red'}}>
        {description}
        </h1>
        <label className={edit?'showEdit':'hideEdit'}>
        <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
        <button  onClick={()=>(dispatch(editTask({id,newDescription})),setNewDescription(""),setEdit(false))}>editTask  </button>
        </label>
        </div>
        <button onClick={()=>dispatch(completed(id))}>DONE</button>
        <button onClick={()=>setEdit(!edit)}>Edit</button>
        </div>
  )
}
