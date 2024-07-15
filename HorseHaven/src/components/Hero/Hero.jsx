import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import BrownButton from '../BrownButton'
import heroimg from '../../assets/Horsehero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero--left'>
        <h1>Experience the Thrill of Horse Riding</h1>
        <h3>Book a horse ride and enjoy the beauty of nature</h3>
        <Link to='/booking'><BrownButton text={"Book Now"} /></Link>
      </div>
      <div className='hero--right'>
        <img src={ heroimg } />
      </div>
    </div>
  )
}

export default Hero
