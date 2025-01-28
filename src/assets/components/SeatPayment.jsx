import React from 'react'
import SeatRoute from './SeatRoute'
import SeatForm from './SeatForm'

const SeatPayment = ({SelectedSeat,paymentroute}) => {
    const seatPrice = 300; 
  const totalPrice = SelectedSeat.length * seatPrice;
  return (
    <>
    <div className='flex flex-col w-[600px] items-center text-[15px]'>
    <div className='w-[600px] flex gap-3 font-bold mb-2'>
        <div className='bg-[#00D919] w-[33%] inter py-1 text-white flex justify-center items-center'>
            <p>Available</p>
        </div>
        <div className='bg-[#FFF200] w-[33%] inter py-1 text-black flex justify-center items-center'>
            <p>Select</p>
        </div>
        <div className='bg-[#EA4C46] w-[33%] inter py-1 text-white flex justify-center items-center'>
            <p>Booked</p>
        </div>
    </div>
    <div className='w-[600px] bg-[#EEECEC] flex flex-col items-center'>
        <div className='w-full bg-[#FF8E48] h-auto py-2 inter font-bold flex justify-between px-7 items-center'>
            <p>Seat No.</p>
            <p>Price</p>
        </div>
        <div className='w-full flex flex-col px-7 py-7 gap-4 max-h-[200px] overflow-auto'>
        {SelectedSeat.map((seat,key) => (
          <div key={key} className="flex justify-between">
            <p className='rounded-sm flex items-center justify-center h-[35px] w-[45px] border-solid border-[2px] border-[#FF8E48] text-black'>{seat}</p>
            <p>{seatPrice}/=</p>
          </div>
        ))}
        </div>
        <div className='w-[97%] bg-[#FFDAC2] py-[6px] h-auto inter font-bold flex justify-between px-3 m-2'>
            <p>Total:</p>
            <p>{totalPrice}/=</p>
        </div>
    </div>
    <SeatRoute from={'Chattragram Counter 2 - 12:30AM'} to={'Dhaka Main Counter - 5:45AM'}/>
    <SeatForm paymentroute={paymentroute}/>
    </div>
    </>
  )
}

export default SeatPayment