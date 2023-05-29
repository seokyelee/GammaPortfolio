
import "./Styleguia.scss";
import Btn from "../componentes/Btn/Btn";
import Variable from "./Variable";
import IconCodepen from "../componentes/Icons/IconCodepen"
import IconLikedin from "../componentes/Icons/IconLinkedin";
import IconGit from "../componentes/Icons/IconGit";
import IconMail from "../componentes/Icons/IconMail";
import IconMoon from "../componentes/Icons/IconMoon";
import Nav from "../componentes/Nav/Nav";
import { useState } from "react";

function Styleguia ()  {
	let [classText, setClassText] = useState('');
	
	function changeClass(){
		if (classText === 'active') {
			setClassText('');
		}else{
			setClassText('active');
		}
	}
	return ( 
		<>
		<h1 className="sg__h1">Styleguia of proyectGamma by syl</h1>
		<Nav/>
		<h2 className="sub_title" onClick={changeClass}>Icons</h2>
		<section className={'icon__container'+ classText}>
			<article className="Icons__box">
				<div className="Icons__box__links">
				<IconCodepen/>
				<IconGit/>
				<IconLikedin/>
				</div>
				<div className="Icons__box__mailMoon">
				<IconMail/>
				<IconMoon/>
				</div>
			</article>
		</section>
		<Btn />
		<Variable />
		</>
	);
}


export default Styleguia