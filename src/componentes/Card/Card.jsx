import React, { useState } from "react";
import "./Card.scss";

function Card(props) {
  let [classText, setClassText] = useState("");

  function changeClass() {
    if (classText === "active") {
      setClassText("");
    } else {
      setClassText("active");
    }
  }

  return (
    <section className="proyect_box" onClick={changeClass}>
      <div className="proyect_box_title">
        <h2 id="title_usestate" className="ptoyect_titulo">
          {props.title}
          <span className="tooltiptext">{props.tooltip}</span>
        </h2>
        <p className="preyect_fecha">{props.fecha}</p>
      </div>

      <div className={"proyect_usestate" + classText}>
        <div className="proyect_description_box">
          <p className="proyect_descrpition">{props.description}</p>
        </div>
       
    

      <div className="proyect_links">
        <a className="proyect_linkto" href={props.linkto}>
          Demo
        </a>
        <a className="proyect_linkto_git" href={props.linktogit}>
          GitHub
        </a>
      </div>
      </div>
    </section>
  );
}

export default Card;
