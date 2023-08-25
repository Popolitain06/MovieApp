import { useState, useEffect } from "react";
import Movie from "./Movie";
import transition from "../transition";
import { motion } from "framer-motion";



function Search(){

    const[searchItem, setSearchItem] = useState("")

    const[dataItem, setDataItem] = useState([])

    const[companyId, setCompanyId] = useState("")

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=a44d45900baf353ab350b996e5baf283`)
        .then(res => res.json())
        .then(res => setDataItem(res.results))
        .catch(err => {throw Error("Erreur" + err )})
        },[searchItem])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${dataItem.id}?api_key=a44d45900baf353ab350b996e5baf283`)
        .then(res => res.json())
        .then(res => console.log(res))
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
        <motion.div
        
        initial={{width : 0}}
        animate={{width : "100%", transition: {duration: 0.5}}}
        exit={{x : window.innerWidth ,transition: {duration: 0.5}}}
        
        >
            <form onSubmit={handleSubmit} className="search-form">
                <label htmlFor="search">Cherchez un film ou Acteur/Actrice</label>
                <input type="text" name="search" id="search" value={searchItem} onChange={inputChange} />
                <button type="submit">Rechercher</button>
            </form>

            <h2>Recherche en cours</h2>

            
            <div className="movie-container">
                <Movie dataItem = {dataItem}/>
            </div>
        </motion.div>

        </>
    )
}

export default transition(Search)