
import { useState, useEffect } from "react";
import Movie from "./Movie";


function Home(){

    const API_KEY = "a44d45900baf353ab350b996e5baf283";
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
    const BASE_FETCH_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=";

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`${BASE_FETCH_URL}${API_KEY}`)
        .then(res => res.json())
        .then(res => setData(res.results))
        .catch(err => {throw Error("Erreur" + err )})
    },[])

    console.log(data)

    return(

        <>

            <h2>Les films tendances de la semaine</h2>

                <div className="movie-container">
                <Movie data ={data}/>
                </div>


        </>
    )
}


export default Home