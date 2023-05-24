
import "./Styleguia.scss";
import Nav from "./Nav";
import Btn from "../componentes/Btn/Btn";
import Variable from "./Variable";


function Styleguia ()  {

	return ( 
		<>
		<h1 className="sg__h1">Styleguia_proyectGamma_syl</h1>
		<Nav/>
		<Btn />
		<Variable />
		</>
	);
}

export default Styleguia