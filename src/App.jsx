import React, { useState } from "react";
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

  return (
    <>
      <Nav />
      
      <ThemeContext.Provider value={{ theme: selectTheme }}>
      <LanguageContext.Provider value={{ language: selectLanguage }}>
      <div className="language_btn_box">
        <button className="language_btn_en" onClick={() => setSelectLanguage('en')}> [En]</button>
        <button className="language_btn" onClick={() => setSelectLanguage('es')}> [Es]</button>
      </div>
      <div className="theme_btn_box">
        <button className="theme_btn_en" onClick={() => setSelectTheme('light')}> [light]</button>
        <button className="theme_btn" onClick={() => setSelectTheme('dark')}> [dark]</button>
      </div>

        <main>
          <Routes >
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









