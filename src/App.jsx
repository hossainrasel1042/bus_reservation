import { useState } from 'react'
import './App.css'
import Modal from './assets/components/Modal'
import Seat from './assets/components/Seat'
import SeatSelect from './assets/components/SeatSelect'
import SeatPayment from './assets/components/SeatPayment'
import SeatModal from './assets/components/SeatModal'
import Navbar from './assets/components/Navbar'
import Header from './assets/components/Header'
import Booking from './assets/Pages/Booking'
import PaymentSection from './assets/components/PaymentSection'
import SeatBooking from './assets/components/SeatBooking'
function App() {
const [openmodal, setopenmodal] = useState(false)
const closeModal = () => setopenmodal(false);
  return (
    <>
    <div className='w-screen h-screen flex'>
      <Navbar/>
    <Booking/>
    </div>
    </>
  )
}

export default App
