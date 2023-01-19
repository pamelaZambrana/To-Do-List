import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoFormStyle.css";

function ToDoForm(){

    const {addToDo,
    setOpenModal,
    }=React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue]=React.useState("");
    
    const onChange=(event)=>{
        setNewToDoValue(event.target.value);
    }
    const onCancel=()=>{
        setOpenModal(false);
    };
    const onSubmit=(event)=>{
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };
    return(

        <form 
            className="addToDo-form"
            onSubmit={onSubmit}>
            <label className="textArea-label">Add a new task</label>
            <textarea 
                className="textArea"
                placeholder="New Task..."
                value={newToDoValue}
                onChange={onChange}
            />
            <div className="cancel-add-button-container">
                <button 
                    className="cancel-button"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="submit-button"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export {ToDoForm};