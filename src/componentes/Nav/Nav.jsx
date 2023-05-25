import { useState } from "react";
import { Link } from "react-router-dom";



export default function Nav() {
	
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
		<h2 className="sub_title" onClick={changeClass}>Navegación</h2>
		<section className={'nav'+ classText}>
			<ul className='nav-box'>
				<li className="nav__item">
					<Link className="nav__link" to='#'>
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link className="nav__link" to='#colores'>
						Colores
					</Link>
				</li>
				<li className="nav__item">
					<Link className="nav__link" to='#tiporafia'>
						Tipografía
					</Link>
				</li>
				<li className="nav__item">
					<Link className="nav__link" to='#botones'>
						Botones
					</Link>
				</li>
			</ul>
		</section>
		</>
	);
}
