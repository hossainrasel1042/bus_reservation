import React, { useState } from 'react'
import { motion } from 'framer-motion';
import BookingB from './BookingB';
const PaymentSection = ({name}) => {
    const [expand, setexpand] = useState(false);
  return (
    <motion.div 
    initial={{ height: 60 }} // Initial height
    animate={{ height: expand ? 220 : 60 }} // Expanded height
    transition={{ duration: 0.5, ease: "easeInOut" }}
    onClick={()=>setexpand(!expand)} className={`w-full overflow-hidden flex items-start relative justify-between bg-[#FF8E48] px-7 py-3 ${(expand)?'h-[400px]':''}`}>
<div className='flex gap-3 items-center'>
    <div className='w-[40px] h-[40px] bg-white rounded-full'></div>
    <p>{name}</p>
</div>
<div><p>{name} logo</p></div>
<div className='flex gap-3 items-center top-[80px] absolute'
onClick={(e) => e.stopPropagation()}>
<motion.p 
onClick={(e) => e.stopPropagation()} className='text-white inter bold'>Enter Your Payment Number: </motion.p>
<motion.input
onClick={(e) => e.stopPropagation()} type='number' className=' outline-none h-[40px] w-[200px] px-3 py-1 rounded-[30px]'></motion.input>
</div>
<div onClick={(e) => e.stopPropagation()} className={'absolute top-[150px] translate-x-[180%]'}>
<BookingB isactive={false}  text={'Pay Now'}/>
</div>
</motion.div> 
 )
}

export default PaymentSection