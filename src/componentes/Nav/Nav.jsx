import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import "../../scss/global.scss";
import "../../App";
import IconMoon from "../../assets/Icons/IconMoon";
import IconMail from "../../assets/Icons/IconMail";
import IconCodepen from "../../assets/Icons/IconCodepen";
import IconGit from "../../assets/Icons/IconGit";
import IconLinkedin from "../../assets/Icons/IconLinkedin";

export default function Nav() {
	return (
		<>
			<section className="nav">
				<ul className="nav__box__left">
					<li className="nav__box__left__item">
					<Link className="icono_mail__page_thanks" to="/thanks">
							<IconMail />
						</Link>
					</li>

					<li className="nav__box__left__item">
						<Link className="icono_moon" to="https://www.google.com/">
							<IconMoon />
						</Link>
					</li>
				</ul>
				<ul className="nav__box__center">
					<li className="nav__box__center__item">
						<Link className="icono_codepen" to="https://codepen.io/seokyelee">
							<IconCodepen />
						</Link>
					</li>
					<li className="nav__box__center__item">
						<Link className="icono_git" to="https://github.com/seokyelee">
							<IconGit />
						</Link>
					</li>
					<li className="nav__box__center__item">
						<Link
							className="icono_linkedin"
							to="https://www.linkedin.com/in/seok-ye-lee-a8196941/"
						>
							<IconLinkedin />
						</Link>
					</li>
				</ul>
				
					
					<div className="nav__box__right__item_home">
						<Link className="page_home" to="/">
							Home
						</Link>
					</div>
					<div className="nav__box__right__item_work">
						<Link className="page_work" to="/work">
							Work
						</Link>
					</div>
					<div className="nav__box__right__item_about">
						<Link className="page_about" to="/about">
							Hi! My name is<br/> Seokye.L
						</Link>
					</div>
			
			</section>
		</>
	);
}
