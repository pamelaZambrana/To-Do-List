import React from "react";
import "./ToDoSearchStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);


function ToDoSearch({searchValue, setSearchValue/*,control,setControl*/}){
    //const [searchValue, setSearchValue]=React.useState("");
    const searchListener = (event)=>{
            console.log(event.target.value);
            setSearchValue(event.target.value);
    };

   /* const searchAction=()=>{
        setControl("search");
    }*/
    return (
        <div className="search-container">
            <input 
                placeholder="Search"
                value={searchValue}
                onChange={searchListener}
            >
            </input>
            <FontAwesomeIcon 
                className="search-icon" icon="magnifying-glass" 
                //control={control}
                //onClick={searchAction}
            />
                        
        </div>
        //<p>{searchValue}</p>
    );

};

export {ToDoSearch};