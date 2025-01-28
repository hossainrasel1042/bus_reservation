import React,{ useState} from 'react'
import Header from '../components/Header'
import BookingButton from '../components/BookingButton'
import BookingRoute from '../components/BookingRoute'
import SeatBooking from '../components/SeatBooking'
import BookingB from '../components/BookingB'
import Payment from '../components/Payment'
import useAuthRedirect from '../components/useAuthRedirect'
const Booking = () => {
  useAuthRedirect();
    const [activePanel, setactivePanel] = useState(0)
    const [activePanelButton, setactivePanelButton] = useState([true,false,false])
    const handleactivePanelBack = () => {
        setactivePanel((prevPanel) => {
          const updatedButtons = activePanelButton.map((elem, key) =>
            key === prevPanel ? false : elem
          );
          setactivePanelButton(updatedButtons);
          return prevPanel - 1;
        });
      };
   
      const handleactivePanelNext = () => {
        setactivePanel((prevPanel) => {
          const updatedButtons = activePanelButton.map((elem, key) =>
            key === prevPanel + 1 ? true : elem
          );
          setactivePanelButton(updatedButtons);
          return prevPanel + 1;
        });
      };

  return (
    <div className='w-full flex flex-col px-12 pb-6'>
        <Header/>
        <BookingButton activeTabe={activePanelButton}/>
        {(activePanel===0) && <BookingRoute onNext={handleactivePanelNext}/>}
        {(activePanel===1 && <SeatBooking paymentroute={handleactivePanelNext}/>)}
        {(activePanel===2 && <Payment/>)}

        {(activePanel>0) &&
        <div className='w-full mt-6 flex gap-4 justify-center items-center'>
            <BookingB onclick={handleactivePanelBack} isactive={false} text={'Previous'} className={'w-[200px] h-[50px] text-[21px]'}/>
        </div>
}
    </div>
  )
}

export default Booking