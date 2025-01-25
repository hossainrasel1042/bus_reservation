import React,{useState} from 'react'
import SeatPayment from './SeatPayment'
import SeatSelect from './SeatSelect'
import Modal from './Modal'
const SeatModal = ({isopen,onclose}) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
      
    const handleSeatSelect = (seatName, isSelected) => {
      setSelectedSeats((prev) =>
        isSelected ? [...prev, seatName] : prev.filter((seat) => seat !== seatName)
      );
    };
  return (
    <Modal isopen={isopen} onClose={onclose} >
   <div className='flex items-start justify-evenly'>
    <SeatSelect onSeatSelect={handleSeatSelect}/>
    <SeatPayment SelectedSeat={selectedSeats}/>
   </div>
   </Modal>
  )
}

export default SeatModal