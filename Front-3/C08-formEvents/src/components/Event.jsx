function Event({number}) {
    function myEvent() {
        alert(`Triggered event? ${number ? number : 'No event number'}`);
    }
    return (
        <div>
            <p>Click to trigger an event</p>
            <button onClick={myEvent}>Trigger</button>
        </div>
    );
}


export default Event