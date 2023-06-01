import React from "react";
import "./Footer.scss";
import BacoderSmall from "../../assets/img/BacoderSmall";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer__box">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut, vel at id
            purus commodo cubilia varius, ullamcorper placerat lacus habitant
            justo mauris nibh. Non nascetur sagittis volutpat pretium phasellus
            rutrum cras, sem accumsan semper mi tempus quis, viverra natoque
            parturient magnis hendrerit ultricies. Lacinia egestas elementum eros
            imperdiet a cubilia class porttitor dis, rhoncus molestie risus
            facilisis tristique ornare phasellus sed faucibus habitant, nibh
            torquent magna senectus praesent vehicula mauris feugiat.
          </p>

          
          <BacoderSmall className="bacoder_s"/>
  

        </div>
      </footer>
    </>
  );
}
