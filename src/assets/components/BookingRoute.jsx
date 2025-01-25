import React from 'react'
import BookingRouteSelect from './BookingRouteSelect';
import Datepicker from './Datepicker';
import BookingB from './BookingB';
const route = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
    "Cumilla",
    "Meherpur"
  ];
  
const BookingRoute = ({onNext}) => {
  return (
    <div className='w-full flex flex-col border-[1px] border-solid mt-5 border-[#FF8E48] p-3'>
        <div className='w-full bg-[#FF8348] h-[60px] inter font-bold text-white flex justify-center items-center'><p>Select your Route and Schedule</p></div>
        <div className='w-full flex justify-between items-end mt-[40px]'>
            <BookingRouteSelect where={'From:'} route={route}/>
            <BookingRouteSelect where={'To:'} route={route}/>
            <Datepicker/>
        </div>
        <div className="flex justify-center w-full mt-[40px]">
          <BookingB onclick={onNext} isactive={true} text={'Booking Seat'}  />
        </div>
    </div>
  )
}

export default BookingRoute