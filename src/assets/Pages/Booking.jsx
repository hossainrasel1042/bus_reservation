import React,{act, useState} from 'react'
import Header from '../components/Header'
import BookingButton from '../components/BookingButton'
import BookingRoute from '../components/BookingRoute'
import SeatBooking from '../components/SeatBooking'
import BookingB from '../components/BookingB'
const Booking = () => {
    const [activePanel, setactivePanel] = useState(0)
    const handleactivePanelBack=()=>{
        setactivePanel(activePanel-1)
    }
    const handleactivePanelNext=()=>{
        setactivePanel(activePanel+1)
    }
  return (
    <div className='w-full flex flex-col px-12'>
        <Header/>
        <BookingButton activeTabe={activePanel}/>
        {(activePanel===0) && <BookingRoute onNext={handleactivePanelNext}/>}
        {(activePanel===1 && <SeatBooking/>)}
        {(activePanel>0) &&
        <div className='w-full mt-6 flex gap-4 justify-center items-center'>
            <BookingB onclick={handleactivePanelBack} isactive={false} text={'Previous'} className={'w-[200px] h-[50px] text-[21px]'}/>
        </div>
}
    </div>
  )
}

export default Booking