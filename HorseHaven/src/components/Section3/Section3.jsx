import React from 'react'
import './Section3.css'
import Card from './Card.jsx'
import image1 from '../../assets/Horse1.jpg'
import image2 from '../../assets/Horse2.jpg'
import image3 from '../../assets/Horse3.jpg'
import image4 from '../../assets/Horse4.jpg'

const Section3 = () => {
  return (
    <div className='sec3-container'>
      <h1>Meet our Horses</h1>
      <p>Our horses are well-trained and cared for by experienced handlers. They are accustomed to interacting with riders of all levels and are trained in various riding styles to cater to different preferences.</p>
      <div className='card-container1'>
        <Card imageurl={ image1 } name="Thunder" text="Thunder is a majestic brown horse known for his grace and strength. He is 8 years old with a calm demeanor and elegant gait, he is perfect for riders of all experience levels. Trained extensively for both leisure and competitive riding, Thunder promises a smooth and enjoyable ride." />
        <Card imageurl={ image2 } name="Bella" text="Bella is a beautiful white horse with a spirited yet gentle nature. She is known for her speed and agility, making her an exciting choice for more adventurous riders. Bella is well-trained in both dressage and trail riding, offering a dynamic riding experience." />
      </div>
      <div className='card-container2'>
        <Card imageurl={ image3 } name="Star" text="Star is a stunning horse, famed for his intelligence and friendly personality. He is highly responsive to commands and enjoys interacting with riders. Star is trained for both classical riding and casual hacks, making him a versatile and delightful companion." />
        <Card imageurl={ image4 } name="Daisy" text="Daisy is a charming horse with a warm and welcoming disposition. She is especially good with children and novice riders, providing a safe and steady ride. Daisy is trained in Western riding and is perfect for those looking to experience a relaxing and enjoyable ride." />
      </div>
    </div>
  )
}

export default Section3
