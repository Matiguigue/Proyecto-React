import { Link } from "react-router-dom";
import '../../src/index.css';

export const CharactersCard = (({characterMap}) => {

    const imgURL = `https://rickandmortyapi.com/api/character/avatar/${characterMap.id}.jpeg`
    
    return (
        <li className="character">
                <img src={imgURL} alt = {characterMap.title}/>
                    <h2> {characterMap.name} </h2>
                     <div>
                        <p>{characterMap.species}</p>
                        <p><span className={characterMap.status.toLowerCase()}></span>{characterMap.status}</p>
                    </div>
                <Link to = {`/character/${characterMap.id}`}>
                    <button type="button" id={characterMap.id}>Ver personaje</button>
                </Link>
        </li>
    )
})