import React, {useState} from 'react'
import "./BookingForm.css"
import Modal from '../Modal/Modal'

const BookingForm = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='booking-container'>
      <div className='booking-form-image'>
      </div>
      <div className='booking-form'>
        <div className='timing'>
          <h1>Our Timing</h1>
          <h3 className='timing--h31'>MONDAY - FRIDAY</h3>
          <p>07:30 - 12:30</p>
          <p>13:30 - 18:00</p>
          <h3 className='timing--h32'>SATURDAY</h3>
          <p>00:00 - 15:00</p>
          <h3 className='number'>Call : +91 01234567891</h3>
          <div className='icons'></div>
        </div>
        <div className='form-in'>
          <h3>STAY IN CONTACT</h3>
          <h1>Book your ride now!</h1>
          <form>
            <div className="entry">
              <label htmlFor="name">NAME</label>
              <input type='text' name='name' required />
            </div>
            <div className="entry">
              <label htmlFor="email">EMAIL</label>
              <input type='email' name='email' required />
            </div>
            <div className="entry">
              <label htmlFor="phone">MOBILE</label>
              <input type='number' name='phone' required/>
            </div>
            <div className="entry">
              <label htmlFor='horse'>HORSE</label>
              <select name='horse'>
              <option value="thunder" name='thunder'>Thunder</option>
              <option value="bella" name='bella'>Bella</option>
              <option value="star" name='star'>Star</option>
              <option value="daisy" name='daisy'>Daisy</option>
              </select>
            </div>
            <div className="entry">
            <label htmlFor="meeting-time">TIMING</label>
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value="2024-07-15T19:30"
              min="2024-07-15T00:00"
              max="2025-07-15T00:00" />
            </div>
            <button onClick={() => setShowModal(true)} type='submit' className='form-btn'>SUBMIT</button>
          </form>
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  )
}

export default BookingForm
