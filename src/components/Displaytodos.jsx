import React from "react";
import { useTodoContext } from "../providers/TodoProvider";
import Edittodos from "./Edittodos";

const Displaytodos = ()=>{
    const {todoList,removeTodo,findTodo,completeTodo,isEditing}= useTodoContext();

    return(
        <div className={isEditing ? "Section3" : "Section2"}>
        {isEditing === true && <Edittodos/>}

        <ul> {todoList.map((todoList,id) =>(
            <li className="todo-list" key={id}>
           <span> <button onClick={()=>completeTodo(todoList.id)}><i className={todoList.completed ? "fa-solid fa-square-check" : "fa-solid fa-square" }></i></button>
           <span className={todoList.completed ? "completed" :""}>{todoList.title}</span> 

            </span>
            <span>
            <button onClick= {()=>findTodo(todoList.id)} disabled={todoList.completed ? true: false}><i className="fa-solid fa-pencil"></i></button>
            <button onClick= {()=>removeTodo(todoList.id)}><i className="fa-solid fa-trash-can"></i></button>
             </span>
            </li>
    ))}
       
        </ul>
        </div>
    );
};

export default Displaytodos;



