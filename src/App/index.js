//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { ToDoProvider } from "../ToDoContext";
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



function App() {

  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
    
  );
}

export default App;
