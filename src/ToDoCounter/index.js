import React from "react";
import "./ToDoCounterStyle.css"

function ToDoCounter({total, complete}){
    return (
        <h2 className="ToDoCounter-text">
           {complete} from {total} completed tasks
        </h2>
    );

};

export {ToDoCounter};