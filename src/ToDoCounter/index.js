import React from "react";
import {ToDoContext} from "../ToDoContext";
import "./ToDoCounterStyle.css"

function ToDoCounter({total, complete}){
    const { totalToDos, completedToDos} =React.useContext(ToDoContext);

    return (
        <h2 className="ToDoCounter-text">
           {completedToDos} FROM {totalToDos} COMPLETED TASK
        </h2>
    );

};

export {ToDoCounter};