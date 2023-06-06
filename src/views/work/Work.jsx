import React, { useEffect, useState } from "react";
import Card from "../../componentes/Card/Card";
import "./Work.scss";
import { Link } from "react-router-dom";
import IconMail from "../../assets/Icons/IconMail";

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
      <div>
        {data.map((item) => (
          <Card
            key={item.index}
            title={item.title}
            tooltip={item.tooltip}
            description={item.description}
            iconprogram={item.iconprogram[("2", "3")]}
            linkto={item.linkto}
            linktogit={item.linktogit}
          />
        ))}
      </div>

      <aside className="return_box">
        <div className="return_home">
          <Link className="page_home" to="/">
            Home
          </Link>
        </div>
        <div className="return_mail">
          <Link className="icono_mail__page_thanks" to="/thanks">
            <IconMail />
          </Link>
        </div>
       
      </aside>
    </>
  );
}
