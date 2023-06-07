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
			<section className="nav__container">
				<div className="nav__item__mail_1">
					<Link  className="icono_mail__page_thanks" to="/thanks">
						<IconMail />
					</Link>
				</div>

				<div className="nav__item__moon_2">
					<Link className="icono_moon" to="https://www.google.com/">
						<IconMoon />
					</Link>
				</div>

				<div className="nav__item__codepen_3">
					<Link className="icono_codepen" to="https://codepen.io/seokyelee">
						<IconCodepen />
					</Link>
				</div>
				<div className="nav__item__git_4">
					<Link className="icono_git" to="https://github.com/seokyelee">
						<IconGit className="zoom"/>
					</Link>
				</div>
				<div className="nav__item__linkedin_5">
					<Link
						className="icono_linkedin"
						to="https://www.linkedin.com/in/seok-ye-lee-a8196941/"
					>
						<IconLinkedin  />
					</Link>
				</div>

				<div className="nav__item__home_6">
					<Link  className="page_home" to="/">
						Home
					</Link>
				</div>
				<div className="nav__item__work_7">
					<Link className="page_work" to="/work">
						Work
					</Link>
				</div>
				<div className="nav__item__about_8">
					<Link  className="page_about" to="/about">
						 I'm Seokye.L
					</Link>
				</div>
			</section>
		</>
	);
}
