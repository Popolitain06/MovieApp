import { useState, useEffect } from "react";
import Movie from "./Movie";



function Search(){

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

    const[searchItem, setSearchItem] = useState("")

    const[dataItem, setDataItem] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=a44d45900baf353ab350b996e5baf283`)
        .then(res => res.json())
        .then(res => setDataItem(res.results))
        .catch(err => {throw Error("Erreur" + err )})},[searchItem])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Valeur de recherche :", searchItem)
        console.log("Valeur de la data", dataItem)
    };

    const inputChange = (e) =>{
        setSearchItem(e.target.value)
    }


    return(

        <>
            <form onSubmit={handleSubmit} className="search-form">
                <label htmlFor="search">Cherchez un film ou Acteur/Actrice</label>
                <input type="text" name="search" id="search" value={searchItem} onChange={inputChange} />
                <button type="submit">Rechercher</button>
            </form>

            <h2>Recherche en cours</h2>
            <div className="movie-container">
            <Movie dataItem = {dataItem}/>
            </div>

        </>
    )
}

export default Search