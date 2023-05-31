import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import './scss/global.scss';
import './scss/variable.scss';
import Home from "./views/home/Home";
import Work from "./views/work/Work";
import About from "./views/about/About";
import Thanks from "./views/thanks/Thanks";
import Nav from "./componentes/Nav/Nav";
import Footer from "./componentes/Footer/Footer";



function App() {

  return (
    <>
      <Nav />

      <main>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </main>


  <Footer/>

    </>
  );
}


export default App
