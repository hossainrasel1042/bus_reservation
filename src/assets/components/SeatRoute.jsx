import React from 'react'

const SeatRoute = ({from,to}) => {
  return (
    <div className='w-[600px] bg-[#D9D9D9] inter text-[16px] flex justify-between items-center p-3 mt-5 mb-3'>
        <div className='bg-[#FFDAC2]  rounded-lg p-2'>
            <p>{from}</p>
        </div>
          <div className='bg-[#FFDAC2] p-2 rounded-lg'>
            <p>{to}</p>
        </div>
    </div>
  )
}

export default SeatRoute