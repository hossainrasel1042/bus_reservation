import React from 'react'
import Routeshow from './Routeshow';
import { useBookingContext } from './BookingContext';
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SeatBooking = ({paymentroute}) => {  
  const {from,to,date}=useBookingContext();
  const day = String(date.getDate()).padStart(2,'0');
  const month = String(date.getMonth() + 1).padStart(2,'0');
  const year = date.getFullYear();
  return (
    <div className='w-full flex flex-col'>
    <div className='w-full flex flex-col border-[1px] border-solid mt-5 border-[#FF8E48] p-3'>
        <div className='w-full bg-[#FF8348] h-[50px] px-4 inter font-bold text-white flex justify-between items-center'>
        <div className='w-full flex justify-between'>
            <p>{`${from} - ${to}`}</p>
            <p>{`${dayNames[date.getDay()]}`}</p>
            <p>{`${day}-${month}-${year}`}</p>
        </div>
        </div>
        <Routeshow paymentroute={paymentroute}/>
    </div>
    <div className="flex justify-center w-full mt-[40px]">
  </div>
  </div>
  )
}

export default SeatBooking