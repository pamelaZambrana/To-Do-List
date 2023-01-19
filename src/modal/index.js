import React from "react";
import ReactDOM  from "react-dom";
import "./modalStyle.css";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal-container">
            {children}
        </div>,
        document.getElementById("modal")
    )
}


export { Modal };