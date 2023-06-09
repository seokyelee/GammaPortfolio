// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/global.scss";
import "./scss/variable.scss";
import Home from "./views/home/Home";
import Work from "./views/work/Work";
import WorkDetail from "./views/work-detail/WorkDetail";
import About from "./views/about/About";
import Thanks from "./views/thanks/Thanks";
import Nav from "./componentes/Nav/Nav";

export const LanguageContext = React.createContext();
export const ThemeContext = React.createContext();

function App() {
  const [selectLanguage, setSelectLanguage] = useState("en");
  const [selectTheme, setSelectTheme] = useState("light");

  const toggleLanguage = () => {
    const newLanguage = selectLanguage === "en" ? "es" : "en";
    setSelectLanguage(newLanguage);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setSelectTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = selectTheme;
    localStorage.setItem("theme", selectTheme);
  }, [selectTheme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme: selectTheme, setTheme: setSelectTheme }}>
        <LanguageContext.Provider value={{ language: selectLanguage, setLanguage: setSelectLanguage }}>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:id" element={<WorkDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </main>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
