import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const addOne = () =>{
        setCount(count + 1);
    };

    return(
        <div className="App">
            <h1>useState hook</h1>
            <div className="card">
                <button onClick={addOne}>count is {count}</button>
            </div>
        </div>
    );
};

export default Counter;