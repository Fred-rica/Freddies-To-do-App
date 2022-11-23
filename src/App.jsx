import React from "react";
import"./App.css"
import Addtodos from "./components/Addtodos";
import Displaytodos from "./components/Displaytodos";
import TodoProvider from "./providers/TodoProvider";



function App() {

  return (
   <TodoProvider>
   <section className="Section1">
   <h1>TO-DO LIST</h1>
   
   <Addtodos/>
   </section>

   <section>
   <Displaytodos/>
   </section>
   </TodoProvider>
   
  );
}

export default App;
