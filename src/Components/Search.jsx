import { useState, useEffect } from "react";
import Movie from "./Movie";



function Search(){

    const[searchItem, setSearchItem] = useState("")

    const[dataItem, setDataItem] = useState([])

    const[companyId, setCompanyId] = useState("")

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=a44d45900baf353ab350b996e5baf283`)
        .then(res => res.json())
        .then(res => setDataItem(res.results))
        .catch(err => {throw Error("Erreur" + err )})},[searchItem])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${dataItem.id}?api_key=a44d45900baf353ab350b996e5baf283`)
        .then(res => res.json())
        .then(res => setCompanyId(res.production_companies))
        .catch(err => {throw Error("Erreur" + err )})
        console.log("Companie de production", companyId)}
        ,[dataItem])

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