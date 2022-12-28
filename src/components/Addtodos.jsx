import React from "react";
import AdditionButton from "../Images/Addition button.svg"
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
      <div className="form-content">
        <input
          type="text"
          value={todoItems}
          placeholder="Input task title"
          onChange={inputTextHandler}
       
        />
        <button type="submit"> <img src={AdditionButton} alt=""  className="AdditionButton"/> </button>
      </div>
    </form>
  );
};

export default Addtodos;
