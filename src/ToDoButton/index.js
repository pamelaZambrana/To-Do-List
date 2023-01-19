import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoButtonStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ToDoButton(){
    const { setOpenModal}=React.useContext(ToDoContext);
    const buttonListener=()=>{
        setOpenModal(prevState => !prevState);
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