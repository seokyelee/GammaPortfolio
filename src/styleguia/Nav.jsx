import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<>
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
		</>
	);
}
