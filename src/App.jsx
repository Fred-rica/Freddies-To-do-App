import React from "react";
import"./App.css"
import Addtodos from "./components/Addtodos";
import Searchtodos from "./components/Searchtodos"
import Addtodosbutton from "./components/Addtodosbutton";
import Displaytodos from "./components/Displaytodos";
import TodoProvider from "./providers/TodoProvider";



function App() {

  return (
   <TodoProvider>
   
   <section className="Section1">
   <h1>TO-DO LIST</h1>
   </section>
   
   <div className="container">
   

   <section>
   <Searchtodos/>
   </section>

   <section>
   <Displaytodos/>
   </section>

   <section className="section 5">
   <Addtodosbutton/>
   </section>


   </div>
   </TodoProvider>
   
  );
}

export default App;
