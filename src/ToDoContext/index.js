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
 //creando un nuevo estado para el modal
  const [openModal, setOpenModal]=React.useState(false);
  //creando un nuevo estado para el botón search
  const [searchButton, setSearchButton]=React.useState(false);
 

  //contando los ToDos completos y la cantidad total de ToDos
  const totalToDos=toDos.length;
  const completedToDos=toDos.filter(item=>!!item.completed).length;
  //array de toDos buscados
  let searchedToDos=[]
    
  if(/*!searchValue>=1 &&*/ searchButton===false){
    searchedToDos = [...toDos];
  }else if(/*searchValue>=1 &&*/ searchButton===true){
      searchedToDos=toDos.filter((toDo)=>{
        const toDoText=toDo.text.toLowerCase();
        const searchText=searchValue.toLowerCase();
        return toDoText.includes(searchText);
      });
  };

  //Añadir nuevo ToDo
  const addToDo=(text)=>{
    const newToDos=[...toDos];
      newToDos.push({
        completed: false,
        text,
      });
      saveToDos(newToDos);
  };

  //actualizar la lista con tareas completadas
  const completeToDos=(text)=>{
    const toDoIndex=toDos.findIndex((item)=>(item.text===text));
    const newItem=[...toDos];
    newItem[toDoIndex].completed=!newItem[toDoIndex].completed;
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
            searchButton,
            setSearchButton,
            searchedToDos,
            completeToDos,
            deleteToDos,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            {props.children}
        </ToDoContext.Provider>
  );
};

export {ToDoContext, ToDoProvider};

