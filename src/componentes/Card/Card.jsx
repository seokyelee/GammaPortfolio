import React from 'react'
import './Card.scss'


function Card(props) {


  return (
    <>
    <div className='proyect_box'>      
    <div className='proyect_title'>{props.title}</div>
      <p>{props.description}</p>
      
      <a href={"props.linkto"}>Demo</a>
    </div>
    </>
  )
} 

export default Card;


