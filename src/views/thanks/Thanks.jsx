import React from "react";
import "./Thanks.scss";
import BacoderBig from "../../assets/img/BacoderBig";
import Btn from '../../componentes/Btn/Btn';





export default function Thanks() {
  
  return (
    <>
    <main className="thanks-container">
      <div className="bacode__thanks">
        <BacoderBig className="bacoder_big"/>
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
