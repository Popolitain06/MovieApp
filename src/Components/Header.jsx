import { Routes, Route, Link } from "react-router-dom"

function Header(){


    return(

    <>
        
        <h1>Movie Searcher</h1>

            <nav> 

                <Link to ={"/"}>Home</Link>
                <Link to ={"search"}>Search</Link>

            </nav>

    </>        

    )
}

export default Header