import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import './scss/global.scss';
import './scss/variable.scss';
import Home from "./views/home/Home";
import Work from "./views/work/Work";
import WorkDetail from "./views/work-detail/WorkDetail";
import About from "./views/about/About";
import Thanks from "./views/thanks/Thanks";
import Nav from "./componentes/Nav/Nav";


export const LanguageContext = React.createContext({ language: undefined });
export const ThemeContext = React.createContext({ theme: undefined });

function App() {
  const [selectLanguage, setSelectLanguage] = useState('es');
  const [selectTheme, setSelectTheme] = useState('light');

  const toggleLanguage = () => {
    const newLanguage = selectLanguage === 'en' ? 'es' : 'en';
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

  const toggleTheme = () => {
    const newTheme = selectTheme === 'light' ? 'dark' : 'light';
    setSelectTheme(newTheme);
  };

  
  return (
    <>
      <Nav />

      <ThemeContext.Provider value={{ theme: selectTheme }}>
        <LanguageContext.Provider value={{ language: selectLanguage }}>
          <div className="toggle_btn_box">
            <button className={`toggle_btn ${selectLanguage === 'en' ? 'active' : ''}`} onClick={toggleLanguage}>
              {selectLanguage === 'en' ? 'En' : 'Es'}
            </button>
            <button className={`toggle_btn ${selectTheme === 'light' ? 'active' : ''}`} onClick={toggleTheme}>
              {selectTheme === 'light' ? 'Light' : 'Dark'}
            </button>
          </div>

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
