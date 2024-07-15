import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/Hero.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Section3 from './components/Section3/Section3.jsx'
import Section4 from './components/Section4/Section4.jsx'
import Footer from './components/Footer/Footer.jsx'

const LandingPage = () => {
  return (
    <>
      <Navbar />  
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  )
}

export default LandingPage
