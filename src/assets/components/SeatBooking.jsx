import React from 'react'
import BookingRouteSelect from './BookingRouteSelect';
import BookingB from './BookingB';
import BookingButton from './BookingButton';
import Routeshow from './Routeshow';

  
const SeatBooking = ({route,day,date}) => {
  return (
    <div className='w-full flex flex-col'>
    <div className='w-full flex flex-col border-[1px] border-solid mt-5 border-[#FF8E48] p-3'>
        <div className='w-full bg-[#FF8348] h-[50px] px-4 inter font-bold text-white flex justify-between items-center'>
        <div className='w-full flex justify-between'>
            <p>ROUTE: {'Chittagong - Dhaka'}</p>
            <p>{'Monday'}</p>
            <p>{'18-8-2002'}</p>
        </div>
        </div>
        <Routeshow/>
    </div>
    <div className="flex justify-center w-full mt-[40px]">
    <BookingB isactive={true} text={'Booking Seat'}  />
  </div>
  </div>
  )
}

export default SeatBooking