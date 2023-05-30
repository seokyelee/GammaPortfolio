import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Nav.scss";
import "../../scss/global.scss";
import IconMoon from "../../assets/Icons/IconMoon";
import IconMail from "../../assets/Icons/IconMail";
import IconCodepen from "../../assets/Icons/IconCodepen";
import IconGit from "../../assets/Icons/IconGit";
import IconLinkedin from "../../assets/Icons/IconLinkedin";

export default function Nav() {
  return (
    <>
      <section>
        <ul className="nav-box">
          <li className="nav__item">
            <Link className="icono_mail" to="https://www.google.com/">
              <IconMail />
            </Link>
          </li>

          <li className="nav__item">
            <Link className="icono_moon" to="https://www.google.com/">
              <IconMoon />
            </Link>
          </li>
          <li className="nav__item">
            <Link className="icono_codepen" to="https://codepen.io/seokyelee">
              <IconCodepen />
            </Link>
          </li>
          <li className="nav__item">
            <Link className="icono_git" to="https://github.com/seokyelee">
              <IconGit />
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="icono_lnkedin"
              to="https://www.linkedin.com/in/seok-ye-lee-a8196941/"
            >
              <IconLinkedin />
            </Link>
          </li>

          <li className="nav__item">
            <Link className="page_home" to="/">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="page_work" to="/work">
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link className="page_about" to="/about">
              My name is Seokye
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
