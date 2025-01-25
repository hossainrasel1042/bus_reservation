import React from 'react'

const SeatForm = () => {
  return (
    <>
    <div className='w-[600px] bg-[#D9D9D9] py-3 px-5 inter font-bold text-[15px] flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <p>Enter Name:</p>
            <input className='h-[40px] font-medium rounded-[25px]  w-[75%] ml-10 outline-none px-4 py-1'  type='text'/>
        </div>
        <div className='flex items-center justify-between'>
            <p>Enter Phone Number:</p>
            <input className='h-[40px] font-medium rounded-[25px]  w-[65%] ml-10 outline-none px-4 py-1' type='number'/>
        </div>
        <div className='flex items-center justify-between'>
            <p>Enter Email:</p>
            <input className='h-[40px] font-medium rounded-[25px]  w-[60%] ml-10 outline-none px-4 py-1' type='email'/>
        </div>
    </div>
    <button className='h-[40px] w-[250px] rounded-[30px] bg-[#FF8E48] flex justify-center items-center text-white inter font-bold m-4'>
    Confirm
</button>
</>
  )
}

export default SeatForm