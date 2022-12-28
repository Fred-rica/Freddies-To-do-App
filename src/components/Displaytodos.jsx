import React from "react";
import EditIcon from "../Images/Edit-icon.svg"
import DeleteIcon from "../Images/Delete-icon.svg"
import { useTodoContext } from "../providers/TodoProvider";
import Edittodos from "./Edittodos";

const Displaytodos = ()=>{
    const {todoList,removeTodo,findTodo,completeTodo,isEditing}= useTodoContext();

    return(
        <div className={isEditing ? "Section3" : "Section2"}>
        {isEditing === true && <Edittodos/>}

        <ul> {todoList.map((todoList,id) =>(
            <li className="todo-list" key={id}>
            <span>
            <button className="todo-list-buttons" onClick={()=>completeTodo(todoList.id)}><i className= {todoList.completed ? "fa-solid fa-square-check fa-3x" : "fa-solid fa-square" }></i></button> 
           <span className={todoList.completed ? "completed" :"uncompleted"}>{todoList.title}</span> 
            
            </span>

            <span>
            <button className="todo-list-buttons"  onClick= {()=>findTodo(todoList.id)} disabled={todoList.completed ? true: false}><img src={EditIcon} alt="EditIcon"></img></button>
            <button className="todo-list-buttons" onClick= {()=>removeTodo(todoList.id)}><img  src={DeleteIcon} alt="DeleteIcon"></img></button>
             </span>
            </li>
    ))}
       
        </ul>
        </div>
    );
};

export default Displaytodos;



