import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () =>{
    const params = useParams();

    const [character, setCharacter] = useState(undefined);
    const getCharacter = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${params.name}`);
        const data = await res.json();
        console.log(data);
        setCharacter(data.results[0]);
    };

    useEffect(()=> {
        getCharacter();
    }, [params]);

    return (
        <div>
            <h1>{character?.name}</h1>
            <img src={character?.image} alt="" />
        </div>
    );
}

export default Character;