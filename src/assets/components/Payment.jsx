import React from 'react'
import PaymentSection from './PaymentSection';
const paymentServices = ["bKash", "Nagad", "Rocket", "Upay", "SureCash", "MyCash", "Payoneer"];

const Payment = () => {
  return (
    <div className='w-full flex flex-col gap-3 border-[1px] mt-8 border-solid border-[#FF8E48] p-5'>
        <h1 className='text-[#FF8E48] text-[24px] inter font-bold'>Select Your Payment Method</h1>
        <div className='flex flex-col gap-4'>
        {
            paymentServices.map((elem,key)=>{
                return(
                    <PaymentSection name={elem}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Payment