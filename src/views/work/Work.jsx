import React, { useEffect, useState } from "react";
import Card from "../../componentes/Card/Card";
import "./Work.scss";


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
            key={item.index}
            title={item.title}
            tooltip={item.tooltip}
            fecha={item.fecha}
            description={item.description}
            linkto={item.linkto}
            linktogit={item.linktogit}
          />
        ))}
      </div>

    </>
  );
}
