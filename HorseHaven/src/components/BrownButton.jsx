import React from 'react'
import './BrownButton.css'

const BrownButton = ({ text }) => {
  return (
    <div>
      <button className='brown-btn'>{ text }</button>
    </div>
  )
}

export default BrownButton
