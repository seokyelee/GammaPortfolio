import React from 'react';
import '../../componentes/Card/cardDatas';

export default function Card(props) {
  return (
    <artical>

      <img src={props.imge} alt="" />
      <p>{props.text}</p>

    </artical>
  )
}
