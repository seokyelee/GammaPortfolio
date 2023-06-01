import React from 'react';
import Card from '../../componentes/Card/Card';
import data from '../../sample.json';

export default function Work() {
  const filteredArray = data.entries.filter(obj => obj.releaseYear >= 2010);
  const slicedArray = filteredArray.slice(0, 20);
  

  return <>
      { slicedArray.map(item => {
          return <Card key={item.id} image={item.images?.['Poster Art'].url} text={item.title}></Card>
      })}
  </>
}

