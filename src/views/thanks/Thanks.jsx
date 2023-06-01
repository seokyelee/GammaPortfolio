import React from "react";
import "./Thanks.scss";
import BacoderLast from "../../assets/img/BacoderLast";
import Btn from '../../componentes/Btn/Btn';


export default function Thanks() {
  return (
    <>
    <main className="thanks-container">
      <div className="bacode__thanks">
        <BacoderLast className="bacoder_last"/>
      </div>
      <section className="thanks__box">
        <h2 className="thank">Thank you for your time.</h2>
        <h3 className="be__root">
          Be the place where I will put my <span>roots.</span>
        </h3>

        <Btn/>

      </section>
      </main>
    </>
  );
}
