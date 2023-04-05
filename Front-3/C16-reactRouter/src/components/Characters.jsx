import React, { useEffect } from "react";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const getCharacters = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        setCharacters(data.results);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return(
        <div>
            <h1>Characters List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map((character)=>(
                        <tr key={character.id}>
                            <td>
                                <Link to='{character.name}'>{character.name}</Link>
                            </td>
                            <td>{character.status}</td>
                            <td>{character.species}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Characters;