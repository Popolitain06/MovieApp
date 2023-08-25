
import { useState, useEffect } from "react";
import Movie from "./Movie";
import transition from "../transition";
import { motion, spring } from "framer-motion";


function Home(){

    const API_KEY = "a44d45900baf353ab350b996e5baf283";
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
            <motion.div
            
            initial={{width : 0}}
            animate={{width : "100%", transition: {duration: 0.5}}}
            exit={{x : window.innerWidth ,transition: {duration: 0.5}}}
            
            >
            <h2>Les films tendances de la semaine</h2>

                <motion.div className="movie-container"
                initial={{x:"-100vw"}}
                animate={{x: 0}}
                transition={{type: "spring", duration: 1, bounce: 0.3}}
                
                >
                    <Movie data ={data}/>
                </motion.div>
            </motion.div>


        </>
    )
}


export default transition(Home)