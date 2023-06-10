import React, { useContext, useState } from "react";
import "./Card.scss";
import { ThemeContext } from "../../App";

function Card(props) {
  let [classText, setClassText] = useState("");

  const themeContext = useContext(ThemeContext);

  const textStyle = {
		color: themeContext.theme === 'dark' ? '#c8e6e4' : '',
	  };
    const shadowStyle = {
      boxShadow: themeContext.theme === 'dark' ? '10px 5px 5px #050049 ' : '',
      };

  function changeClass() {
    if (classText === "active") {
      setClassText("");
    } else {
      setClassText("active");
    }
  }

  return (
    <section style={shadowStyle} className={"proyect_box " + props.extraClass} onClick={changeClass}>
      <div className="proyect_box_title">
        <h1 id="title_usestate" className="ptoyect_titulo">
          {props.title} 
          <span className="tooltiptext">{props.tooltip}</span>
        </h1>
        <p className="preyect_date">{props.date}</p>
        </div>
        <div className="proyect_description_box">
          <p style={textStyle} className="proyect_descrpition">{props.description}</p>
        </div>
      

      <div className={"proyect_usestate" + classText}>
      
          <p style={textStyle} className="proyect_content">{props.content}</p>
        
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
