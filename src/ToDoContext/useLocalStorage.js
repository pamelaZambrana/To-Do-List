import React from "react";

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
    });
  
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

  export {useLocalStorage};