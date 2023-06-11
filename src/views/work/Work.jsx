import React, { useEffect, useState } from "react";
import ScrollEffect from "../../componentes/ScrollEffect/ScrollEffect";
import Card from "../../componentes/Card/Card";
import "./Work.scss";
import "../../scss/global.scss";
import Thanks from "../thanks/Thanks";
import { Link } from "react-router-dom";

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

      <main className="work_page">
        <h1 className="proyject_page_title">Proyects</h1>
        <div className="scroll-effect">
          <div className="card_div">
            {data.map((item) => (
              <Link to={'/work/' + item.id}>
                <Card
                  key={item.id}
                  extraClass={item.extraClass}
                  title={item.title}
                  tooltip={item.tooltip}
                  date={item.date}
                  description={item.description}
                  content={item.content}
                  linkto={item.linkto}
                  linktogit={item.linktogit}
                  img1={item.img1}
                  img2={item.img2}
                />
              </Link>
            ))}
          </div>
          <div className="link_seemore">
            <p> Do you want to know what I did in another sector?</p>
            <a className="link_more" href="https://www.linkedin.com/in/seok-ye-lee-a8196941/" alt="Linkedin">[Clik here]</a>
          </div>
        </div>
        <Thanks />
      </main>
      <ScrollEffect />
    </>
  );
}
