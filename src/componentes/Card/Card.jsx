import React from 'react'
import './Card.scss'


function Card(props) {


  return (
    <>
    <div className='proyect_box'>      
    <h2 className='proyect_title'>{props.title}</h2>
   
    <div className='proyect_description_box'>
    <p className='proyect_descrpition'>{props.description}</p>
      <p className='proyect_icons'>{props.iconprogram}</p>
      <div className='proyect_links'>
      <a className='proyect_linkto' href={props.linkto}>Demo</a>
      <a className='proyect_linkto' href={props.linkto}>GitHub</a>
    </div>
    </div>
    </div>
    
    </>
  )
} 

export default Card;


