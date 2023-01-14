import React from "react";
import "./ToDoButtonStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ToDoButton(){
    const buttonListener=()=>{
        alert(`creaste una tarea nueva`);
    };

    return (
        <button 
            className="add-button"
            onClick={buttonListener}
        >
                <FontAwesomeIcon className="add-button-icon" icon="circle-plus" />
        </button>
    );

};

export {ToDoButton};