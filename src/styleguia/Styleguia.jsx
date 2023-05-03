import './Styleguia.scss'

import Nav from "./Nav"
import Btn from '../componentes/Btn/Btn';
import Variable from './Variable';



export default function Styleguia() {

    return (

        <>
    
            <h1 className="sg__h1">Hola, soy styleguia</h1>
            <Nav />
            <Btn />
            <Variable />
           
        </>
    );
}