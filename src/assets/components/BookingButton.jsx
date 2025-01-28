import React, { useState } from 'react'
import BookingB from './BookingB'
const data=[
    'Route & Schedule',
    'Booking',
    'Payment',
]
const BookingButton = ({activeTabe}) => {
  return (
    <div className='w-full flex gap-3 justify-center items-center mt-16'>
        {
            data.map((elem,key)=>{
                return(
                    <>
                    <BookingB  key={key} text={elem} isactive={(activeTabe[key])?true:false}></BookingB>
                    {(key===data.length-1)?"":<div className= {`w-[120px] h-[2px] ${(activeTabe[key+1])?'bg-[#FF8348] opacity-100':'bg-black opacity-60'}`}></div>}
                    </>
                )
            })
        }
    </div>
  )
}

export default BookingButton