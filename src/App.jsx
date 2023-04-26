import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguia from './views/Styleguia'

function App() {

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>
      <Link to="/contact">Contacto</Link>
      <Link to="/">Home</Link>
      <Link to="/styleguia">Stayleguia</Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguia" element={<Styleguia />} />
      </Routes>
    </main>
    </>
  )
}

export default App
