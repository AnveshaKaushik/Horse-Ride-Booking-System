import React from 'react'
import "./Section4.css"
import BeigeButton from '../BeigeButton'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <div className='sec4-container'>
      <h1>Experience the joy of Riding</h1>
      <p>Discover the thrill of horse riding with our friendly and well-trained horses.</p>
      <Link to='/booking'><BeigeButton text="Book" /></Link>
    </div>
  )
}

export default Section4
