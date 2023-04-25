import React from "react";
import Card from "./Card";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [showCard, setShowCard] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const validateName = name.length > 5;
        const validateLastName = lastName.length > 5;

        if (validateName && validateLastName) {
            setShowCard(true);
        }

        if (!validateName) {
            setNameError(true);
            setShowCard(false);
        }else{
            setNameError(false);
        }

        if (!validateLastName) {
            setLastNameError(true);
            setShowCard(false);
        }else{
            setLastNameError(false);
        }
    }

    const onNameChange = (e) =>{
        setName(e.target.value);
    }

    const onLastNameChange = (e) =>{
        setLastName(e.target.value);
    }

    const onDoctorChange = (e) =>{
        setDoctor(e.target.value);
    }

    return(
        <>
            <h2>Personal Information</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"  onChange={onNameChange}/>
                    {nameError ? <p>There's an error with your name, please check</p> : ''}
                    
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" id="lastname"  onChange={onLastNameChange}/>
                    {lastNameError ? <p>There's an error with your last name, please check</p> : ''}

                    <label htmlFor="doctor">Choose doctor</label>
                    <select name="" id="doctor" value={doctor} onChange={onDoctorChange} required>
                        <option value="" disabled  >Choose a Doctor</option>
                        <option value="Maria Contreras">María Contreras</option>
                        <option value="Carmen Villareal">Carmen Villareal</option>
                        <option value="Ximena Alzate">Ximena Alzate</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Book</button>
                </div>
            </form>
            {/*Confirmación de turno con fecha */}
            {showCard && <Card name={name} lastname={lastName} doctor={doctor}></Card>}
            
        </>
    );
}


export default Form