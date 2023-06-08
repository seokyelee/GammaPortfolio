import React, { useEffect, useState } from "react";
import Card from "../../componentes/Card/Card";
import "./Work.scss";
import Thanks from "../thanks/Thanks";


export default function Work() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("/proyects.json")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
      });
  }, []);

  return (
    <>
      <div className="card_div">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            tooltip={item.tooltip}
            date={item.date}
            description={item.description}
            linkto={item.linkto}
            linktogit={item.linktogit}
          />
        ))}
      </div>
      <div className="link_seemore">
      <p> Do you want to know what I did in another sector?</p>
     <a className="link_more" href="https://www.linkedin.com/in/seok-ye-lee-a8196941/" alt="Linkedin">[Clik here]</a>
     </div>

     <Thanks/>
    </>
  );
}
