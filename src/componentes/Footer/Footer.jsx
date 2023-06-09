import React, { useContext } from "react";
import "./Footer.scss";
import BacoderSmall from "../../assets/img/BacoderSmall";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

export default function Footer() {

  const themeContext = useContext(ThemeContext);

  return (
    <>
      <footer >
        <div className="footer__box">
        <Link className="page_about" to="/about">
          <p className={`footer__box_description ${themeContext.theme === "dark" ? "dark" : ""}`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut, vel at id
            purus commodo cubilia varius, ullamcorper placerat lacus habitant
            justo mauris nibh. Non nascetur sagittis volutpat pretium phasellus
            rutrum cras, sem accumsan semper mi tempus quis, viverra natoque
            parturient magnis hendrerit ultricies. Lacinia egestas elementum eros
            imperdiet a cubilia class porttitor dis, rhoncus molestie risus
            facilisis tristique ornare phasellus sed faucibus habitant, nibh
            torquent magna senectus praesent vehicula mauris feugiat.
          </p>
          </Link>

          <Link className="page_work" to="/Work">
          <BacoderSmall className="bacoder_s"/>
          </Link>

        </div>
      </footer>
    </>
  );
}
