import React from "react";
import { useTodoContext } from "../providers/TodoProvider";

const Addtodos = () => {
  const { addTodo,todoItems,SetTodoItems} = useTodoContext();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todoItems){return;}
    addTodo(todoItems);
    SetTodoItems ("")
   
  };

  const inputTextHandler =(e)=>{
    SetTodoItems(e.target.value)
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <p>New Todo:</p>
      <div className="form-content">
        <input
          type="text"
          value={todoItems}
          placeholder="Add Task"
          onChange={inputTextHandler}
       
        />
        <button type="submit"> Add</button>
      </div>
    </form>
  );
};

export default Addtodos;
