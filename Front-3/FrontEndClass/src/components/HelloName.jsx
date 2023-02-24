import React from "react";
import  ReactDOM from "react-dom";
import OnlyHi from "./OnlyHi";

const HelloName = (props)=>{
    return(
        <>
            {props.children}
        </>
    );
};

export default HelloName