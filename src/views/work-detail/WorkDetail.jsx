import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./WorkDetail.scss"

export default function WorkDetail() {
    let [data, setData] = useState([]);
    let params = useParams();

    useEffect(() => {
      fetch("/proyects.json")
        .then((res) => res.json())
        .then((info) => {            
          setData(info.find(item => item.id == params.id));
        });
    }, []);

    return (
      <>
    <h1 className="proyect_h1">{data?.title}</h1>
 <section className="proyect_detail_box">
    <div>
    <p className="proyect_content">{data?.content}</p>
    </div>
      <div className="proyect_links">
          <a className="proyect_linkto" href={data?.linkto}>
            Demo
          </a>
          <a className="proyect_linkto_git" href={data?.linktogit}>
            GitHub
          </a>
      </div>
      <div className="proyect_img_box">
          <img className="proyect_img1" src={data?.img1} alt="" />
      </div>
    </section></>

  ) 
}