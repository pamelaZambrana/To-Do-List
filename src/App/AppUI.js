import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch} from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoButton } from "../ToDoButton";


function AppUI({
    loading,
    error,
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDos,
    deleteToDos,
}){
    return (
    <React.Fragment>
      
      <ToDoCounter
        total={totalToDos}
        complete={completedToDos}
      />
        {/*<h2>Has completado 2 de 3 tareas</h2>*/}
        
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        //control={control}
        //setControl={setControl}
      />
      {/*<input placeholder="Tarea"></input>*/}

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

      <ToDoButton/>
      {/*<button>+</button>*/}

    </React.Fragment>)
}
export { AppUI };
