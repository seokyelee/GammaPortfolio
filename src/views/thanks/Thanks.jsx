import React from "react";
import "./Thanks.scss";
import BacorderSmall from "../../assets/img/BacorderSmall";

export default function Thanks() {
  return (
    <>
      <div className="bacode__thanks">
        <BacorderSmall />
      </div>
      <section className="thanks__box">
        <h2 className="thank">Thank you for your time.</h2>
        <h3 className="be__root">
          Be the place where I will put my <span>roots.</span>
        </h3>
      </section>
    </>
  );
}
