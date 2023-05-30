import React from "react";
import BacorderSmall from "../../assets/img/BacorderSmall";
import "./Thanks.scss";

export default function Thanks() {
  return (
    <>
    <main>
      <div className="bacode__thanks">
        <BacorderSmall />
      </div>
      <section className="thanks__box">
        <h2 className="thank">Thank you for your time.</h2>
        <h3 className="be__root">
          Be the place where I will put my <span>roots.</span>
        </h3>
      </section>
      </main>
    </>
  );
}
