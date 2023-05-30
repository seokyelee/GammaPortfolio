import React from "react";
import './App.css';
import Nav from "./componentes/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Work from "./views/work/Work";
import About from "./views/about/About";
import Thanks from "./views/thanks/Thanks";


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

    </>
  );
}


export default App
