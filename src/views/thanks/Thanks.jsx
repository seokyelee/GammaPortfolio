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
      ? 'Be the place where I will put my <span className="roots"></span>roots.'
      : 'Espero que sea un lugar donde pueda echar <span className="raices"></span>raíces.';

  return (
    <>
      <main className="thanks-container">
        <section className="thanks__box">
          <div className="arbol">
      


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
