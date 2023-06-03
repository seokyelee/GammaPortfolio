import React, { useEffect, useState } from 'react';
import Card from '../../componentes/Card/Card';


  function Work() {
    let [data, setData] = useState([]);
    // let data = [];
    // useEffect, useState
    useEffect(() => {
        fetch('/proyects.json')
            .then(res => res.json())
            .then(info => {
                setData(info);
            });
    }, [])

  return <>
  <div> 
    {data.map(item => <Card key={item.title} title={item.title} description={item.description} iconprogram={item.iconprogram[0]} linkto={item.linkto} />)}
    </div>
  </>
}


export default Work;
