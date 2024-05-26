const API = "https://rickandmortyapi.com/api"

export const getCharacters = (path) => {

    return fetch (API + path)
    .then((results)=>results.json())


}
