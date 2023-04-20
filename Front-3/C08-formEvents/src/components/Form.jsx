const Form = () =>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const validateName = (name) => {
        if (name.length > 10) {
            return true;
        }else{
            return false;
        }
    }

    function signUpUser(event) {
        // Evitar comportamiento por defecto de la función
        event.preventDefault();
        if (validateName (name)) {
            console.log('Saved user');
        }else{
            console.log('Invalid name');
        }
    }

    const onNameChange = (e) => {
        setName(e.target.value);
        console.log('user tipped');
    };

    const onPassChange = (e) => {
        setPassword(e.target.value);
        console.log('password tipped');
    }

    return(
        <>
        <h1>My subscription</h1>
        <form action="" onSubmit={signUpUser}>
            <div>
                <input type="text" placeholder="Write your name" value = {name} onChange={onNameChange}/>
            </div>
            <div>
                <input type="password" placeholder="Write your password" onChange={onPassChange} />
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
        </>
    );
}


export default Form
