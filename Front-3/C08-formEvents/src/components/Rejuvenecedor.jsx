import { useState } from "react"

const Rejuvenecedor = () =>{
    const[name, setName] = useState('');
    const[age, setAge] = useState(0);

    const onNameChange = (e) =>{
        setName(e.target.value);
    }


    const onAgeChange = (e) =>{
        setAge(e.target.value);
    }

    const sendForm = () =>{
        const validateName = name.length > 1;
        const validateAge = age >= 0;

        if(validateName && validateAge){
            alert(`${name}, your confirmed age is ${age - 10}`)
        }else{
            alert('There is an error in your info')
        }
    }

    return(
        <>
            <h2>Choose pokemon</h2>
            <form action="" onSubmit={sendForm}>
                <div>
                    <label for="name">Fullname</label>
                    <input id="name" type="text" onChange={onNameChange}/>
                    <label for="age">Age</label>
                    <input id="age" type="number" onChange={onAgeChange}/>
                    <label for='pokemon'>Favorite Pokemon</label>
                    <select name="" id="pokemon">
                        <option value="">Bulbasaur</option>
                        <option value="">Ivysaur</option>
                        <option value="">Charizard</option>
                    </select>
                </div>
                <div>
                    <button type="sumbit">Send</button>
                </div>
            </form>
        </>
    );
}

export default Rejuvenecedor