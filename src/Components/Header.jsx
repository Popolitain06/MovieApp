import { Routes, Route, NavLink } from "react-router-dom"
import img from '../Ressources/Searcher.png'

function Header(){


    return(

    <>
        
        <h1><img src={img} alt="ff" className="img-header" ></img></h1>

            <nav> 

                <NavLink to ={"/"}>Home</NavLink>
                <NavLink to ={"search"}>Search</NavLink>

            </nav>

    </>        

    )
}

export default Header