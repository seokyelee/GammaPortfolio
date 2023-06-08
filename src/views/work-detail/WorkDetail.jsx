import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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

    return  <h1>{data?.title}</h1>
}