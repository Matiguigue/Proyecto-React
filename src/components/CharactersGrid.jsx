import { getCharacters } from "../utils/conexionAPI";
import { CharactersCard } from "./CharactersCard";
import { useState, useEffect } from "react"

export const CharactersGrid = () => {

    const [characters,setCharacters] = useState([])

    useEffect(()=>{

        getCharacters("/character").then((data)=>{
             console.log(data.results)

            setCharacters(data.results)
        })
    },[])

    return(

        <ul className="charactersGrid" id="characters">
            {characters.map((character)=>(
                <CharactersCard key={character.id} characterMap={character}/>
            ))}
        </ul>
    )
}