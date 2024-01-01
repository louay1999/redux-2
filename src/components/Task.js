import React from 'react'
import { complited } from '../reduxToolkit/todoSlice'
import { useDispatch } from 'react-redux'

export default function Task(props) {
    const{description,id,isDone}=props.todo
    const dispatch=useDispatch();
  return (
    <div><h1 style={isDone===true?{color:'green'}:{color:'red'}}>
        {description}
        </h1>
        <button onClick={()=>dispatch(complited(id))}>DONE</button>
        </div>
  )
}
