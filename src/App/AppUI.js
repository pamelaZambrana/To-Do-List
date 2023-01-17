import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch} from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoButton } from "../ToDoButton";


function AppUI(){
  return (
    <React.Fragment>
        <ToDoCounter/> 
        <ToDoSearch/>
        {/*<input placeholder="Tarea"></input>*/}
      <ToDoContext.Consumer>
        {({
          error,
          loading,
          searchedToDos,
          completeToDos,
          deleteToDos,
        })=>(
          <ToDoList>
            {/*creando tres estados de carga*/}
            {error && <p>There was an error...</p>}
            {loading && <p>Loading...</p>}
            {(!loading && !searchedToDos.length) && <p>Create a task</p>}
            {searchedToDos.map(item=>(
              <ToDoItem 
                key={item.text} 
                text={item.text}
                completed={item.completed}
                onComplete={()=>completeToDos(item.text)}
                onDelete={()=>deleteToDos(item.text)}
              />
              ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>
        <ToDoButton/>
        {/*<button>+</button>*/}
      
    </React.Fragment>)
}
export { AppUI };
