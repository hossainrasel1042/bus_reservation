import React,{useState} from 'react'

const BookingRouteSelect = ({route,where,handleRoute}) => {
    const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleRoute(event.target.value,where);
  };

  return (
    <div className='flex flex-col gap-3 items-start'>
        <h3 className='inter font-bold text-[18px]'>{where}</h3>
    <select className='w-[240px] h-[50px] bg-[#DFDFDF] rounded-[30px] outline-none px-5' value={selectedOption} onChange={handleChange}>
    <option value="">Select From</option>
    {route.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
  </select>
  </div>
  )
}

export default BookingRouteSelect