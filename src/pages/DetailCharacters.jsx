import { getCharacters } from "../utils/conexionAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailCharacters = () => {
    const [character, setCharacter] = useState(null);
    const { characterId } = useParams();

    useEffect(() => {
        getCharacters(`/character/${characterId}`).then((data) => {
            setCharacter(data);
        });
    }, [characterId]);

    if (!character) {
        return null;
    }

    const imgURL = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;

    return (
        <div>
            <a href="/"> Volver</a>
            <article className="character">
                <img src={imgURL} alt={character.name} />
                <h2>{character.name}</h2>
                <div>
                    <p>{character.species}</p>
                    <p>
                        <span className={character.status.toLowerCase()}></span>
                        {character.status}
                    </p>
                </div>
            </article>
        </div>
    );
};
