import { Link } from 'react-router-dom'
import './scss/global.scss'
import './App.css'

function App() {

  return (
    <>
      <header className="section">

        <Link className="icono_mail" to="https://www.google.com/">
          <IconMail/>
        </Link>
        <Link className="icono_moon" to="/">
        <IconMoon/>
        </Link>
        <Link className="icono_codepen" to="https://codepen.io/seokyelee">
        <IconCodepen/>
        </Link>
        <Link className="icono_git" to="https://github.com/seokyelee">
        <IconGit/>
        </Link>
        <Link className="icono_lnkedin" to="https://www.linkedin.com/in/seok-ye-lee-a8196941/">
        <IconLinkedin/>
        </Link>
        <Link className="page_home" to="/">Home</Link>
        <Link className="page_work" to="/work">Work</Link>
        <Link className="page_about" to="/about">My name is Seokye</Link>
      </header>
      <main>
       
       
      </main>


    </>
  );
}



export default App
