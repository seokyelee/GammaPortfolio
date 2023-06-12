import React, { useContext } from "react";
import "./Thanks.scss";
import Btn from "../../componentes/Btn/Btn";
import { LanguageContext, ThemeContext } from "../../App";

export default function Thanks() {
  const userData = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);

  const textStyle = {
    color: themeContext.theme === "dark" ? "#ededdf" : "",
  };

  const shadowStyle = {
    boxShadow: themeContext.theme === "dark" ? "10px 5px 5px #050049 " : "",
  };

  const rootsText =
    userData.language === "en"
      ? 'Be the place where I will put my <span className="roots">roots</span>.'
      : 'Espero que sea un lugar donde pueda echar <span className="raices">raíces</span>.';

  return (
    <>
      <main className="thanks-container">
        <section className="thanks__box">
          <div className="arbol">
            <img src="foto/Ellipse 3.png" alt="brotes verdes" />
          </div>
          <h3
            style={textStyle}
            className="be__root"
            dangerouslySetInnerHTML={{ __html: rootsText }}
          ></h3>

          <Btn />
        </section>
      </main>
    </>
  );
}
