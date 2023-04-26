import './Styleguia.scss'
import Nav from "./Nav"
import Btn from '../componentes/Btn/Btn';


export default function Styleguia() {

    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" rel="stylesheet"></link>
        
            <h1 className="sg__h1">Hola, soy styleguia</h1>
            <Nav />
            <Btn />
        </>
    );
}