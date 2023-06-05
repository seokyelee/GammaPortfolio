import React, { useEffect, useState } from 'react';
import Card from '../../componentes/Card/Card';
import './Work.scss'

export default function Work() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('/proyects.json')
      .then(res => res.json())
      .then(info => {
        setData(info);
      });
  }, [])

  return <>
    <div>
      {data.map(item =>
        <Card  key={item.index} title={item.title}
          description={item.description} iconprogram={item.iconprogram[0,1,2,3]} linkto={item.linkto} linktogit={item.linktogit} />)}
    </div>
  </>
}

