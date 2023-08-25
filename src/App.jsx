import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Search from './Components/Search';
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation()





  return (

    <>

      <Header />

      <AnimatePresence mode='wait'>

      <Routes location={location} key={location.pathname}>

        <Route path="/" element = {<Home/>}/>
        <Route path="search" element = {<Search/>}/>


      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
