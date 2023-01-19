import React from "react";
import "./ToDosLoading.css";

function ToDosLoading(){
    return (
    <div className="LoadingToDo-container">
        <span className="LoadingToDo-completion"></span>
        <p className="LoadingToDo-text">Loading...</p>
        <span className="LoadingToDo-deleteIcon"></span>
    </div>
    
    )
}

export {ToDosLoading};