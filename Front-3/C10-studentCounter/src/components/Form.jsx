import React, { useState } from "react";
import List from "./List";

const Form = () =>{
    const [selectedValue, setSelectedValue] = useState('');
    const [ErrorSelect, setErrorSelect] = useState('');
    const [totalStudents, setTotalStudents] = useState({
        one: 0,
        two: 0,
        three: 0
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (selectedValue == '') {
            alert("You don't choose a room!");
            // No seguir ejecutando función
            return;
        }

        setTotalStudents({
            ...totalStudents, 
            [selectedValue]: totalStudents[selectedValue] + 1,
        });
    }

    function onChangeSelect(e) {
        setSelectedValue(e.target.value);

        if (e.target.value === 'one' || e.target.value === 'two' || e.target.value === 'three') {
            setErrorSelect('');
        }else{
            setErrorSelect('Unavailable room');
        }
    }

    return (
        <div>
            <h2>Student Counter by room</h2>
            <h5></h5>
            <form action="" onSubmit={handleSubmit}>
                <select name="" id="" placeholder="Choose a room" onChange={onChangeSelect} value={selectedValue}>
                    <option value="" disabled default>Choose a room</option>
                    <option value="one">Room 1</option>
                    <option value="two">Room 2</option>
                    <option value="three">Room 3</option>
                    <option value="four">Room 4</option>
                    <option value="five">Room 5</option>
                </select>
                {ErrorSelect && <div>{ErrorSelect}</div>}
                <input type="submit" value="Adicionar" disabled = {!!ErrorSelect}/> {/* !! Change datatype to boolean*/}
            </form>
            <List totalStudents={totalStudents}/>
        </div>
    );
}