import React from 'react'
import { useState } from 'react'
const Seat = ({notAvailable,name,onSeatSelect}) => {
    const [seat, setseat] = useState(false)
   
    const toggleSeatSelection = () => {
      if (!notAvailable) {
        setseat(!seat);
        onSeatSelect(name, !seat);
      }
    };

    if(notAvailable){
        return(
             <button className='rounded-sm items-center justify-center h-[35px] w-[45px] bg-[#EA4C46] text-black'>{name}</button>              
        )
    }
  return (
    <button onClick={toggleSeatSelection} className={`rounded-sm items-center justify-center h-[35px] w-[45px] ${(!seat)?'bg-[#00D919]':'bg-[#FFF200]'} text-black`}>{name}</button>
  )
}

export default Seat