import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({handleDate}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleselect=(date)=>{
    setSelectedDate(date)
    handleDate(date);
  }
  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => handleselect(date)} 
        dateFormat="yyyy-MM-dd"
        placeholderText="Select Date"
        className='w-[240px] h-[50px] bg-[#DFDFDF] rounded-[30px] outline-none px-5'
      />
    </div>
  );
}

export default Datepicker;
