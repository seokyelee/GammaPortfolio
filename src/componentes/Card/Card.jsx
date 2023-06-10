import React, { useContext, useState } from "react";
import "./Card.scss";

import { ThemeContext } from "../../App";


function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const themeContext = useContext(ThemeContext);
  let [classText, setClassText] = useState("");

  const textStyle = {
    color: themeContext.theme === "dark" ? "#c8e6e4" : "",
  };

  const shadowStyle = {
    boxShadow: themeContext.theme === "dark" ? "10px 5px 5px #050049 " : "",
  };

  const isDarkMode = themeContext.theme === "dark";

  function handleHover() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <section
      className={`proyect_box ${props.extraClass} ${isHovered && isDarkMode ? "dark-mode-hover" : ""
        }`}
      style={shadowStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="proyect_box_title">
        <h1 id="title_usestate" className="ptoyect_titulo" style={textStyle}>
          {props.title}
          <span className="tooltiptext">{props.tooltip}</span>
        </h1>
        <p className="preyect_date" style={textStyle}>{props.date}</p>
      </div>
      <div className="proyect_description_box">
        <p style={textStyle} className="proyect_descrpition">
          {props.description}
        </p>
      </div>

      <div className={`proyect_usestate ${classText}`}>
        <p style={textStyle} className="proyect_content">
          {props.content}
        </p>

        <div className="proyect_links">
          <a className="proyect_linkto" href={props.linkto}>
            Demo
          </a>
          <a className="proyect_linkto_git" href={props.linktogit}>
            GitHub
          </a>
        </div>
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
    </section>
  );
}

export default Card;
