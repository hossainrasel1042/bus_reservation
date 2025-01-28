import React,{useState,useEffect} from 'react'
import BookingRouteSelect from './BookingRouteSelect';
import Datepicker from './Datepicker';
import BookingB from './BookingB';
import { useBookingContext } from './BookingContext';

const route = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
    "Cumilla",
    "Meherpur"
  ];
  
const BookingRoute = ({onNext}) => {
  const { from,to,date,updateFrom, updateTo, updateDate } = useBookingContext();
    const [checker, setchecker] = useState(false)
    const handleDate=(dates)=>{
        updateDate(dates)
        console.log(dates);
    }
    const handleRoute=(routeName,pos)=>{
        if(pos==='From:'){
            updateFrom(routeName);
        }else{
            updateTo(routeName);
        }
        console.log(pos);
        console.log(routeName);
    }
    const handlebutton = () => {
        if (from && to && date) {
          onNext();
        } else {
setchecker(true)
            }
      };
      useEffect(() => {
        setchecker(false);
      }, [from,to,date])
      
    return (
    <div className='w-full flex flex-col border-[1px] border-solid mt-5 border-[#FF8E48] p-3'>
        <div className='w-full bg-[#FF8348] h-[60px] inter font-bold text-white flex justify-center items-center'><p>Select your Route and Schedule</p></div>
        <p className={`text-red-700 mt-10 text-[18px] ${(checker)?'block':'hidden'}`}>Error! Check All Data Is Selected</p>
        <div className='w-full flex justify-between items-end mt-[40px]'>
            <BookingRouteSelect where="From:" handleRoute={handleRoute} route={route}/>
            <BookingRouteSelect where="To:" handleRoute={handleRoute} route={route}/>
            <Datepicker handleDate={handleDate}/>
        </div>
        <div className="flex justify-center w-full mt-[40px]">
          <BookingB onclick={handlebutton} isactive={true} text={'Booking Seat'}  />
        </div>
    </div>
  )
}

export default BookingRoute