import React from "react";
import "./Footer.scss";
import BacoderSmall from "../../assets/img/BacoderSmall";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer__box">
        <Link className="page_about" to="/about">
          <p className="footer__box_description">
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
