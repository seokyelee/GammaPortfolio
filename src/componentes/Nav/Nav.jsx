
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import IconMail from "../../assets/Icons/IconMail";
import IconCodepen from "../../assets/Icons/IconCodepen";
import IconGit from "../../assets/Icons/IconGit";
import IconLinkedin from "../../assets/Icons/IconLinkedin";
import { ThemeContext, LanguageContext } from "../../App";
import IconMoon from "../../assets/Icons/IconMoon";

export default function Nav() {
	const themeContext = useContext(ThemeContext);
	const languageContext = useContext(LanguageContext);

	const textStyle = {
		color: themeContext.theme === "dark" ? "#fff" : "",
	};

	const handleThemeToggle = () => {
		const newTheme = themeContext.theme === "light" ? "dark" : "light";
		themeContext.setTheme(newTheme);
	};

	const handleLanguageToggle = () => {
		const newLanguage = languageContext.language === "en" ? "es" : "en";
		languageContext.setLanguage(newLanguage);
	};

	return (
		<>
			<section className={`nav__container ${themeContext.theme === "dark" ? "dark" : ""}`}>
				

				<div className="nav__item__codepen">
					<Link className="icono_codepen" to="https://codepen.io/seokyelee">
						<IconCodepen />
					</Link>
				</div>
				<div className="nav__item__git">
					<Link className="icono_git" to="https://github.com/seokyelee">
						<IconGit className="zoom" />
					</Link>
				</div>
				<div className="nav__item__linkedin">
					<Link className="icono_linkedin" to="https://www.linkedin.com/in/seok-ye-lee-a8196941/">
						<IconLinkedin />
					</Link>
				</div>

				<div className="nav__item__home">
					<Link className="page_home" style={textStyle} to="/">
						Home
					</Link>
				</div>
				<div className="nav__item__work">
					<Link className="page_work" style={textStyle} to="/work">
						Work
					</Link>
				</div>
				<div className="nav__item__about">
					<Link className="page_about" style={textStyle} to="/about">
						I'm Seokye.L
					</Link>
				</div>

				<div className="toggle_btn_language">
					<button style={textStyle} className={`toggle_btn ${languageContext.language === "en" ? "active" : ""}`} onClick={handleLanguageToggle}>
						{languageContext.language === "en" ? "En" : "Es"}
					</button>
				</div>
				<div className="toggle_btn_theme">
					<button style={textStyle} className={`toggle_btn ${themeContext.theme === "dark" ? "active" : ""}`} onClick={handleThemeToggle}>
						{themeContext.theme === "dark" ? <IconMoon /> : <img src="foto/sun.png" alt="Light Icon" className="toggle_btn__icon" />}
					</button>
				</div>
				<div className="nav__item__mail">
					<Link className="icono_mail__page_thanks" to="/thanks">
						<IconMail />
					</Link>
				</div>
			</section>
		</>
	);
}
