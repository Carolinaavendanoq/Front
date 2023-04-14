import  React, { useState }  from "react";

const List = () =>{
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    const addItems = () =>{
        setCount(count + 1);
        setItems([...items, `Artículo No. ${count} añadido a la lista`]);
    }

    return(
        <>
            <h2>List items</h2>
            <ul>
                {items.map((item, count) =>(
                    <li key={count}>{item}</li>
                ))}
            </ul>
            <button onClick={addItems}>Add Items</button>
        </>
    );
}

export default List