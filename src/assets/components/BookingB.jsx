import React from 'react'

const BookingB = ({text,isactive,onclick,className}) => {
  return (
    <button onClick={onclick} className={`${className} inter py-2 px-8 rounded-[30px] font-bold text-[16px] ${(isactive)?('text-white bg-[#FF8E48]'):('text-black bg-[#D9D9D9]')}`}>{text}</button>
  )
}

export default BookingB