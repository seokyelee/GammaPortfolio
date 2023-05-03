import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import './scss/global.scss'
import Home from './views/home/Home'
import Contact from './views/contact/Contact'
import Styleguia from './styleguia/Styleguia'



function App() {

  return (
    <>
    <header className="section">
      <h1 className="title">Proyecto Gamma</h1>
      <Link to="/contact">Contacto</Link>
      <Link to="/">Home</Link>
      <Link to="/styleguia">Styleguia</Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguia" element={<Styleguia />} />
      </Routes>
    </main>
    </>
  );
}

export default App
