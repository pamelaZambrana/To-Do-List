import React from "react";
import "./ToDoItemStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faCheck, faBomb,faCirclePlus,faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faCheck,faBomb, faCirclePlus,faXmark);


function ToDoItem(props){
    //definiendo eventos
   /* const checkEvent=()=>{
        alert(`Completaste la tarea: ${props.text}`);
    };*/
    
   /* const deleteEvent=()=>{
        alert(`Borraste la tarea: ${props.text}`)
    }*/

    return (
        <li>
            <FontAwesomeIcon 
            className={` Icon check-icon ${props.completed && 'check-icon--active'} `} icon="check" 
            onClick={props.onComplete}
            />
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--completed'}`}>
                {props.text}
                </p>
            <FontAwesomeIcon 
            className="Xmark-icon" icon="xmark" 
            onClick={props.onDelete}
            />
        </li>
    );

};

export {ToDoItem};