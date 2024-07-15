import React from 'react'
import './BeigeButton.css'

const BeigeButton = ({ text }) => {
  return (
    <div>
      <button className='beige-btn'>{ text }</button>
    </div>
  )
}

export default BeigeButton
