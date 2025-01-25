import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => setSelectedDate(date)} 
        dateFormat="yyyy-MM-dd"
        placeholderText="Select Date"
        className='w-[240px] h-[50px] bg-[#DFDFDF] rounded-[30px] outline-none px-5'
      />
    </div>
  );
}

export default Datepicker;
