import { useState } from "react";
import style from "../css/Form.module.css";

function Form() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isErrorName, setIsErrorName] = useState(false);

    const validateName = (value) => {
        if(value.length > 10){
            return true;
        }else{
            return false;
        }
    };

    function signUpUser(e) {
        e.preventDefault(); // Evitar comportamiento pro defecto de dicha función
        // No recargar la página completa

        if(validateName(name)){
            setIsErrorName(false);
            console.log("Usuario guardado");
        }else{
            setIsErrorName(true);
            console.log("Tu nombre tiene menos de 10 caracteres");
        }
    }

    const onNameChange = (e) => {
        setName(e.target.value);
        console.log(name);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(name);
    };

    return (
        <>
            <h1>Mi inscripción</h1>
            <form onSubmit={signUpUser}>
                <div>
                    <input className={isErrorName ? style.input : style.input-error} type="text" placeholder="Escriba su nombre" value = {name} onChange={onNameChange} />
                </div>
                {isErrorName && <p>Hay un error!</p>}
                <div>
                    <input type="password" placeholder="Escriba su password" onChange={onPasswordChange} />
                </div>
                <div>
                    <button type="submit">Guardar</button>
                </div>
                <p>onFocus & onBlur</p>
            </form>
        </>
    );
}

export default Form