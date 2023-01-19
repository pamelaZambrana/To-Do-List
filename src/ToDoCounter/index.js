import React from "react";
import {ToDoContext} from "../ToDoContext";
import "./ToDoCounterStyle.css"

function ToDoCounter({total, complete}){
    const { totalToDos, completedToDos} =React.useContext(ToDoContext);

    return (
        <h2 className="ToDoCounter-text">
           {completedToDos} from {totalToDos} completed tasks
        </h2>
    );

};

export {ToDoCounter};