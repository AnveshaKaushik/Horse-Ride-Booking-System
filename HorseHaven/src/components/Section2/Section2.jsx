import React from 'react'
import './Section2.css'
import BrownButton from '../BrownButton'
import HorseRider from '../../assets/Horse riding.jpg'
import { Link } from 'react-router-dom'

const Section2 = () => {
  return (
    <div className='sec2'>
      <div className='sec2--left'>
        <h4>Discover</h4>
        <h1>Unforgettable Horse <br /> Riding Experiences await <br />you</h1>
        <p>Choose from our selection of beautiful horses and <br />embark on an exciting horse riding adventure. Book <br />now and create memories that will last a lifetime.</p>
        <div className='sec2--left--container'>
            <div className='sec2--left--c1'>
                <h2>Book Now</h2>
                <p>Experience the thrill of horse riding with our friendly and well trained horses.</p>
            </div>
            <div className="sec2--left--c2">
                <h2>Explore More</h2>
                <p>Discover the beauty of nature while enjoying horse riding through scenic trails.</p>
            </div>
        </div>
        <Link to='/booking'><BrownButton text={"Book Now"} /></Link>
      </div>
      <div className="sec2--right" >
        <img src={ HorseRider } alt='image' className='sec2--right--img'/>
      </div>
    </div>
  )
}

export default Section2
