import React from "react";
import { ToDoContext } from "../ToDoContext";

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

        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                placeholder="New Task..."
                value={newToDoValue}
                onChange={onChange}
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export {ToDoForm};