import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./WorkDetail.scss";
import Nav from "../../componentes/Nav/Nav";

export default function WorkDetail() {
  const [data, setData] = useState([]);
  const params = useParams();
  const scrollingImagesRef = useRef(null);
  const [languageToggle, setLanguageToggle] = useState("en");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((info) => {
        setData(info.find((item) => item.id == params.id));
      });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollingImagesRef.current.classList.add("start-scrolling");
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>
      
      <h1 className="proyect_h1">{data?.title}</h1>
      <section className="proyect_detail_box">
        <div className="proyect_content_box">
          <p className="proyect_content">
            {data && data.content
              ? languageToggle === "en"
                ? data.content.en
                : data.content.es
              : "Loading content..."}
          </p>
          <div>{data?.description}</div>
          </div>
          <div className="proyect_links">
          <a className="proyect_linkto" href={data?.linkto} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a className="proyect_linkto_git" href={data?.linktogit}  target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        
        
        <div className="proyect_img_box">
          <div className="image_wrapper">
            <div className="scroll-images">
              <div
                ref={scrollingImagesRef}
                className="scrolling-images"
              >
                <img className="proyect_img1" src={data?.img1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="link_proyectpage">
          <Link className="return_proyectpage" to="/work">
            Return
          </Link>
        </div>
        <div className="scrollToTop">
          <a href="#" onClick={scrollToTop}>
            Top
          </a>
        </div>
      </section>
    </>
  );
}
