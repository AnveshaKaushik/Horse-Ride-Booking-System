import React from 'react'
import "./Modal.css"
import image from '../../assets/flower-image.png'

const Modal = () => {
  return (
    <div className='modal'>
        <div className='modal--image'>
            <img src={ image } alt='flower-image' />
        </div>
        <h3>Ride Confirmed!</h3>
        <p>Get ready to saddle up and create unforgettable memories with our amazing horses.</p>
    </div>
  )
}

export default Modal
