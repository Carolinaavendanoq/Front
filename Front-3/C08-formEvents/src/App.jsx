import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import Rejuvenecedor from './components/Rejuvenecedor'
import './App.css'

function App() {
  const[userName, setUserName] =useState(""); 
  const[password, setPassword] =useState("");

  const onChangeUserName = (e) => setUserName(e.target.value); 
  
  const onChangePassword = (e) => setPassword(e.target.value);
  
  const onSubmitForm = (e) => { 
    // Evitamos que se recargue la pagina previniendo el comportamiento por defecto 
    e.preventDefault(); 

    // alert(`Bienvenido:${userName}`); 
    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    if (!isPasswordValid || !isUsernameValid) {
      alert("Alguno de los datos ingresados no son correctos");
    } else {
      // Por ahora solo mostramos el nombre del usuario
      alert(`Bienvenido: ${userName}`);
    }

  };

  const validateUserName = (userName) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = userName.trim();
    // Validamos la extension
    if (withoutSpaces.length > 2) {
      return true;
    } else {
      return false;
    }
  };


  const validatePassword = (password) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = password.trim();
    // Separamos el string en un array para luego
    // recorrelo y validar si existe al menos un numero
    const passwordAsArray = withoutSpaces.split("");
    // Some nos retorna true si al menos una de las
    // iteraciones es verdadera
    const hasNumber = passwordAsArray.some((character) => {
      // Si el valor es NaN, no es un numero
      if (isNaN(character)) {
        return false;
      } else {
        return true;
      }
    });
    
    // Validamos la extension y que haya al menos un numero
    if (withoutSpaces.length > 5 && hasNumber) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>Log in</h3>
      <form action="" onSubmit={onSubmitForm}>
        <input type="text" placeholder='Username' value={userName} onChange={onChangeUserName}/>
        <input type="password" placeholder='Password' value={password} onChange={onChangePassword} />
        {/* Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón */}
        <button type='submit'>Enviar</button>
      </form>
      <hr />
      <Rejuvenecedor/>
    </div>
  )
}

export default App
