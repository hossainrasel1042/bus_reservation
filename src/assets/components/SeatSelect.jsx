import React from 'react'
import Seat from './Seat'
const data=[
    ['A1','A2','A3','A4'],
    ['B1','B2','B3','B4'],
    ['C1','C2','C3','C4'],
    ['D1','D2','D3','D4'],
    ['E1','E2','E3','E4'],
    ['F1','F2','F3','F4'],
    ['G1','G2','G3','G4']
]
const SeatSelect = ({onSeatSelect}) => {
  return (
    <div className=' w-[300px] h-[550px] bg-[#FFDAC2] gap-3 p-2 flex flex-col justify-center items-center relative'>
        <div className='bg-[#3B3B3B] w-full h-[40px] text-white font-medium flex justify-between py-2 px-5'>
            <p>Enter</p>
            <p>Driver</p>
        </div>
        <ul className='flex flex-col gap-6 w-full'>
            {data.map((elem,key)=>{
                return(
                <ul className='flex justify-between w-full my-[2px]'>
                    <ul className='flex gap-3'>
                    <li key={key}><Seat name={elem[0]} onSeatSelect={onSeatSelect}/></li>
                    <li key={key}><Seat name={elem[1]} onSeatSelect={onSeatSelect}/></li>
                    </ul>
                    <ul className='flex gap-3'>
                    <li key={key}><Seat name={elem[2]} onSeatSelect={onSeatSelect}/></li>
                    <li key={key}><Seat name={elem[3]} onSeatSelect={onSeatSelect}/></li>
                    </ul>
                </ul>
                )
            })}
        </ul>
        <div className='bg-[#3B3B3B] w-full h-[40px] text-white font-medium flex items-center justify-center'>
            <p>Engine</p>
        </div>
    </div>
  )
}

export default SeatSelect