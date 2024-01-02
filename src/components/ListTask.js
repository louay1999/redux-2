import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
export default function ListTask() {
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todos);
  console.log(filter);
  return (
    <div>
      <h3>filter task:</h3>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">all task</option>
        <option value="isdone">isDone</option>
        <option value="notdone">not DONE</option>
      </select>

      {todos
        .filter((todo) => {
          switch (filter) {
            case "all":
            return todo;
            case "isdone":
             return todo.isDone ===true;
            case "notdone":
           return todo.isDone === false;
          }
        })
        .map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
    </div>
  );
}
