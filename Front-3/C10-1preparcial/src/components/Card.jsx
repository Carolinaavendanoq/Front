import React from "react";

const Card = ({name, lastname, doctor}) => {
    return(
        <>
            <p>Hello {name + ' ' + lastname} your medical appointment with Dr {doctor} was successfully scheduled</p>
        </>
    );
}

export default Card