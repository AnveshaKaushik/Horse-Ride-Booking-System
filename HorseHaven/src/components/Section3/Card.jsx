import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={ props.imageurl } className='card-image'/>
        <h2 className='name-container'>{ props.name }</h2>
        <p>{ props.text }</p>
    </div>
  )
}

export default Card
