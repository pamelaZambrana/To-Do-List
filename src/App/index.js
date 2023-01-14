//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {AppUI} from "./AppUI";

/* const defaultToDos=[
  {text:"hacer ejercicio", completed:false},
  {text:"limpiar dormitorio", completed:true},
  {text:"descongelar pollo", completed:true},
  {text:"Esrudiar en Platzi y practicar con proyectos", completed:false},
  {text:"Jugar con mascotas", completed:false},
  {text:"Ver Mr Robot", completed:true},
  {text:"Salir a pasear", completed:true},
  {text:"Realizar llajua para la fiesta de mi tio pepe", completed:false},
] */

//crando nuestro propio hook
function useLocalStorage(itemName,initialValue){
  //Creando estados de carga
  const [error,setError]= React.useState(false);
  const [loading,setLoading]= React.useState(true);

  //creando un nuevo estado para la lista de toDos
  const [item,setItem]=React.useState(initialValue);

  //simulando el efecto de retraso de una api y solucionando
  React.useEffect(()=>{
    setTimeout(()=>{
      try{//Almacenando las tareas en local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        //lógica para el almacenamiento de información
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem=initialValue;
        }else{
          parsedItem=JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }catch (error){
        setError(error);
      };
    },1500);
  },[]);

  //función para actualizar el local store al usar check o delete
  const saveItem=(newItem)=>{
     try{
      const stringifyItem=JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifyItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };
  return{
    item,
    saveItem,
    loading,
    error
  };
};

function App() {
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

  return (
    <AppUI
      error={error}
      loading={loading}
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDos={completeToDos}
      deleteToDos={deleteToDos}
    />
  );
}

export default App;
