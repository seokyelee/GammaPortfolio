import { Link, Route, Routes } from 'react-router-dom'
import './scss/global.scss'
import './App.css'

import Home from './views/home/Home'
import Contact from './views/contact/Contact'
import Styleguia from './styleguia/Styleguia'
import Btn from './componentes/Btn/Btn'
import Variable from './styleguia/Variable'
import Nav from './styleguia/Nav'


function App() {

  return (
    <>
    <header className="section">
      <h1 className="title">Proyect Gamma</h1>
      <Link className="page_home" to="/">Home</Link>
      <Link className="page_style" to="/styleguia">Styleguia</Link>
      <Link className="page_contact" to="/contact">Contacto</Link>
    </header>
    <main>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/styleguia" element={<Styleguia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  );
}



export default App
