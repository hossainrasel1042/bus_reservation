import React,{useState,useEffect} from 'react'
import SeatPayment from './SeatPayment'
import SeatSelect from './SeatSelect'
import Modal from './Modal'
const SeatModal = ({isopen,onclose,paymentroute}) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
      
    const handleSeatSelect = (seatName, isSelected) => {
      setSelectedSeats((prev) =>
        isSelected ? [...prev, seatName] : prev.filter((seat) => seat !== seatName)
      );
    };
    useEffect(() => {
      setSelectedSeats([]);
    }, [isopen])
    
  return (
    <Modal isopen={isopen} onClose={onclose} >
   <div className='flex items-start justify-evenly'>
    <SeatSelect onSeatSelect={handleSeatSelect}/>
    <SeatPayment paymentroute={paymentroute} SelectedSeat={selectedSeats}/>
   </div>
   </Modal>
  )
}

export default SeatModal