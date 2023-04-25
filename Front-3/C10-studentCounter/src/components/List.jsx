import React from "react";

const List = ({totalStudents}) => {
    return(
        <>
            <h3>Students Amount by room</h3>
            <ul>
                <li>Room 1: {totalStudents.one}</li>
                <li>Room 2: {totalStudents.two}</li>
                <li>Room 3: {totalStudents.three}</li>
            </ul>
        </>
    );
}

export default List