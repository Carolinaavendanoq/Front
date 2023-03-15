function Event({number}){
    function myEvent() {
        alert(`Disparado evento ${number ? number : "Sin número de evento"}`);
        console.log("Disparado evento ");
    }

    return (
        <div>
            <p>Haga click para disparar un evento</p>
            <button onClick={myEvent}>Disparar</button>
        </div>
    );
}

export default Event