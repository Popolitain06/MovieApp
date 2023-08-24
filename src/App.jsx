import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Search from './Components/Search';
import { Routes, Route, Link } from "react-router-dom"

function App() {





  return (

    <>

      <Header />

      <Routes>

        <Route path="/" element = {<Home/>}/>
        <Route path="search" element = {<Search/>}/>


      </Routes>
    </>
  );
}

export default App;
