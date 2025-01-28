import React from 'react'
import BookingB from './BookingB'
import SeatModal from './SeatModal';
import { useState } from 'react';
const Routeshow = ({paymentroute}) => {
    const [active, setactive] = useState(false);
    const handleOpen =()=>{
        setactive(true);
    }
    const handleClose=()=>{
        setactive(false);
    }
  return (
    <>
    <SeatModal paymentroute={paymentroute} isopen={active} onclose={handleClose}/>
    <div className='bg-[#FFDAC2] my-3 flex gap-3 p-3 inter items-center justify-between'>
        <div className='w-[150px] flex flex-col justify-between p-2 h-[120px]'> 
            <h3 className='font-bold text-[#FF8E48]'>ROBIN EXPRESS</h3>
            <div>
            <p>Non-AC</p>
            <p>SHOHAG PARIBAHAN</p>
            <p>1007</p>
            </div>
        </div>
        <div  className='w-[150px] text-[15px] flex flex-col justify-between  p-2 h-[120px] border-solid border-[#FF8E48] border-l-[2px]'>
            <h3 className='font-bold text-[#FF8E48EF]'>DEPARTURE TIME</h3>
            <p className='font-bold text-[18px] mb-3'>12:30</p>
        </div>
        <div  className='w-[150px] flex flex-col justify-between p-2 h-[120px]  border-solid border-[#FF8E48] border-l-[2px]'>
            <h3 className='font-bold text-[#FF8E48EF]'>ARRIVAL TIME</h3>
            <p className='font-bold text-[18px] mb-3'>4:30</p>
        </div>
        <div  className='w-[150px]  flex flex-col justify-between p-2 h-[120px]  border-solid border-[#FF8E48] border-l-[2px]'>
        <h3 className='font-bold text-[#FF8E48EF]'>AVAILABLABLE</h3>
        <p className='font-bold text-[18px] mb-3'>25</p>
        </div>
        <div  className='w-[150px] flex justify-center p-2 h-[120px] border-solid border-[#FF8E48] border-l-[2px]'>
            <div className='flex flex-col items-center'>
            <h3 className='text-[30px] font-bold text-[#FF8E48]'>300bdt</h3>
            <BookingB text={'Seats'} onclick={handleOpen} isactive={true}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Routeshow