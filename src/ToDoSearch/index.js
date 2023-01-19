import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearchStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faCircleXmark);


function ToDoSearch(){
    const {searchValue, setSearchValue}=React.useContext(ToDoContext);
    const {searchButton, setSearchButton}=React.useContext(ToDoContext);
     //crear un nuevo estado para eliminar el search
    const [searchXButton, setSearchXButton]=React.useState(true);

    const searchListener = (event)=>{
            console.log(event.target.value);
            setSearchValue(event.target.value);
    };
    const searchButtonListener=()=>{
        setSearchButton(preState=>!preState);
        setSearchXButton(preState=>!preState);
        console.log(searchButton);
    }
    const searchXButtonListener=()=>{
        
        setSearchXButton(preState=>!preState);
        setSearchButton(preState=>!preState);
        setSearchValue("");
    }

   /* const searchAction=()=>{
        setControl("search");
    }*/
    return (
        <div className="search-container">
            <input
                className="search-input" 
                placeholder="Search"
                value={searchValue}
                onChange={searchListener}
            >
            </input>
            <FontAwesomeIcon 
                className={`search-icon-${searchButton}`} 
                icon="magnifying-glass" 
                onClick={searchButtonListener}
                //control={control}
                //onClick={searchAction}
            />
            <FontAwesomeIcon 
                className={`Xsearch-icon-${searchXButton}`} 
                icon="circle-xmark" 
                onClick={searchXButtonListener}
                //control={control}
                //onClick={searchAction}
            />
                        
        </div>
        //<p>{searchValue}</p>
    );

};

export {ToDoSearch};