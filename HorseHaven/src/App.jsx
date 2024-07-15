import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import BookingForm from './components/BookingForm/BookingForm'
import Modal from './components/Modal/Modal'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/booking' element={<BookingForm />} />
      </Routes>
    </>
  )
}

export default App
