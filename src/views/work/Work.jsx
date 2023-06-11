import React, { useEffect, useState } from "react";
import Card from "../../componentes/Card/Card";
import "./Work.scss";
import "../../scss/global.scss";
import { Link } from "react-router-dom";

export default function Work() {
  let [data, setData] = useState([]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        <div className="card_div">
          {data.map((item) => (
            <Link key={item.id} to={'/work/' + item.id}>
              <Card
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
        <div className="scrollToTop">
          <a href="#" onClick={scrollToTop}>
            Top
          </a>
        </div>
      </main>

    </>
  );
}
