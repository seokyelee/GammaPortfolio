
import "./Styleguia.scss";
import Nav from "./Nav";
import Btn from "../componentes/Btn/Btn";
import Variable from "./Variable";
import IconCodepen from "../componentes/Icons/IconCodepen"
import IconLikedin from "../componentes/Icons/IconLinkedin";
import IconGit from "../componentes/Icons/iconGit";
import IconMail from "../componentes/Icons/IconMail";
import IconMoon from "../componentes/Icons/IconMoon";

function Styleguia ()  {

	return ( 
		<>
		<h1 className="sg__h1">Styleguia of proyectGamma by syl</h1>
		<Nav/>
		<h2>Icons</h2>
			<section className="Icons__box">
				<div className="Icons__box__links">
				<IconCodepen/>
				<IconGit/>
				<IconLikedin/>
				</div>
				<div className="Icons__box__mailMoon">
				<IconMail/>
				<IconMoon/>
				</div>
			</section>
		<Btn />
		<Variable />
		</>
	);
}

export default Styleguia