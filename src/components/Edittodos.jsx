import React from 'react'
import { useTodoContext } from "../providers/TodoProvider";
import { useEffect } from "react";

const Edittodos = () => {
    const {editTodo,editItem,handleUpdateTodo,setEditInput,editInput} = useTodoContext();
    const inputTextHandler =(e)=>{
    setEditInput(e.target.value)
  }

  useEffect(()=>{
    if (editItem !== null){
    setEditInput(editItem.title)
    } else setEditInput ("")
  },[editItem, setEditInput])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!editItem){return;}
   editTodo(editItem.title,editItem.id)
   handleUpdateTodo(editItem.id,editInput )
   setEditInput("")
   
   
  };

   

  return (
    <form onSubmit={handleSubmit} className="Edit-form-content">
      <p>Edit:</p>
        <input
          type="text"
          placeholder='Edit Task'
          value={editInput}
          onChange={inputTextHandler}
        />
        <button type="submit"> Save</button>
    </form>
  );
}

export default Edittodos