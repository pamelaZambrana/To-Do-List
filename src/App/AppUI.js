import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch} from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import {ToDoForm} from "../ToDoForm";
import { ToDoButton } from "../ToDoButton";
import { Modal } from "../modal";
import {ToDosError} from "../ToDosError";
import {ToDosLoading} from "../ToDosLoading";
import {EmptyToDos} from "../EmptyToDos";



function AppUI(){
  const {
    error,
    loading,
    searchedToDos,
    completeToDos,
    deleteToDos,
    openModal,
   }=React.useContext(ToDoContext);
  return (
    <React.Fragment>
      <ToDoCounter/> 
      <ToDoSearch/>
      <ToDoList>
        {/*creando tres estados de carga*/}
        {error && <ToDosError error={error}></ToDosError>}
        {loading && <ToDosLoading></ToDosLoading>}
        {(!loading && !searchedToDos.length) && <EmptyToDos></EmptyToDos>}
        {searchedToDos.map(item=>{
          return (
            <ToDoItem 
              key={item.text} 
              text={item.text}
              completed={item.completed}
              onComplete={()=>completeToDos(item.text)}
              onDelete={()=>deleteToDos(item.text)}
            />
          )
          })}
      </ToDoList>
      {!!openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
      
      <ToDoButton/>
    </React.Fragment>);
}
export { AppUI };
