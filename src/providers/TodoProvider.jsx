/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("todoStore")) || [];
  const [todoList, setTodoList] = useState(initialState);
  const [editItem, setEditItem] = useState(null);
  const [todoItems, SetTodoItems] = useState("");
  const [editInput, setEditInput] = useState("");
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([
      ...todoList,
      { title: newTodo, id: uuid(), completed: false },
    ]);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };


  const completeTodo = (id) => {
   const newList= todoList.map((todo)=>
        todo.id === id ?
        {...todo,completed:!todo.completed} :todo  
        )

        setTodoList(newList)
  };

  const findTodo = (id) => {
    setIsEditing(true)
    const newList = todoList.find((todo) => todo.id === id);
    setEditItem(newList);
  };

  const editTodo = (title, id) => {
    const newList = todoList.map((todo) =>
      todo.id === id ? { title, id } : todo
    );

    setTodoList(newList);
  };

  const handleUpdateTodo = (id, title) => {
    const updatedItem = todoList.map((todo) => {
      return todo.id === id ? { id, title, completed: false } : todo;
    });
    setEditItem(null);
    setTodoList(updatedItem);
    setIsEditing(false)
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        removeTodo,
        findTodo,
        editTodo,
        editItem,
        todoItems,
        SetTodoItems,
        handleUpdateTodo,
        editInput,
        setEditInput,
        completeTodo,
        isEditing,
        setIsEditing
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
