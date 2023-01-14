import React from "react";
import "./ToDoListStyle.css"

function ToDoList(props){
    return (
        <section className="list-container">
            <ul>
                {props.children}
            </ul>
        </section>
    );

};

export {ToDoList};