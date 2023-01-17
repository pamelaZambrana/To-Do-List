import React from "react";
import {useLocalStorage} from "./useLocalStorage"

const ToDoContext = React.createContext();

function ToDoProvider(props){
    //usando nuestro custom hook
  const{
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  }=useLocalStorage("TODOS_V1",[]);
  
  //creando el estado para el search
  const [searchValue, setSearchValue]=React.useState("");
  //const [control, setControl]=React.useState("unsearch");

  //contando los ToDos completos y la cantidad total de ToDos
  const totalToDos=toDos.length;
  const completedToDos=toDos.filter(item=>!!item.completed).length;

  //array de toDos buscados
  let searchedToDos=[]
      
  if(!searchValue>=1){
    searchedToDos = toDos;
  }else{
      searchedToDos=toDos.filter(item=>{
        const toDoText=item.text.toLowerCase();
        const searchText=searchValue.toLowerCase();
        return toDoText.includes(searchText);
      });
  };

  //actualizar la lista con tareas completadas
  const completeToDos=(text)=>{
    const toDoIndex=toDos.findIndex(item=>item.text===text)
    const newItem=[...toDos];
    newItem[toDoIndex].completed=true;
    saveToDos(newItem);
  };
  
  //actualizar la lista sin tareas borradas
  const deleteToDos=(text)=>{
    const toDoIndex=toDos.findIndex(item=>item.text===text)
    const newItem=[...toDos];
    newItem.splice(toDoIndex,1);
    saveToDos(newItem);
  };

    return(
        <ToDoContext.Provider value={{
            error,
            loading,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDos,
            deleteToDos,
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
};

export {ToDoContext, ToDoProvider};

