import React, { useState } from 'react'
import BookingB from './BookingB'
const data=[
    'Route & Schedule',
    'Booking',
    'Payment',
    'Download Ticket',
]
const BookingButton = ({activeTabe}) => {
  return (
    <div className='w-full flex gap-3 justify-center mt-16'>
        {
            data.map((elem,key)=>{
                return(
                    <BookingB  key={key} text={elem} isactive={(activeTabe===key)?true:false}></BookingB>
                )
            })
        }
    </div>
  )
}

export default BookingButton