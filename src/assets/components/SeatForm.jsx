import React, { useState } from "react";

const SeatForm = ({ paymentroute }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = formData.name && formData.phone && formData.email;

  const handleConfirm = () => {
    if (!isFormValid) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    paymentroute();
  };

  return (
    <>
      <div className="w-[600px] bg-[#D9D9D9] py-3 px-5 inter font-bold text-[15px] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>Enter Name:</p>
          <input
            name="name"
            className="h-[40px] font-medium rounded-[25px] w-[75%] ml-10 outline-none px-4 py-1"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Enter Phone Number:</p>
          <input
            name="phone"
            className="h-[40px] font-medium rounded-[25px] w-[65%] ml-10 outline-none px-4 py-1"
            type="number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Enter Email:</p>
          <input
            name="email"
            className="h-[40px] font-medium rounded-[25px] w-[60%] ml-10 outline-none px-4 py-1"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        onClick={handleConfirm}
        disabled={!isFormValid}
        className={`h-[40px] w-[250px] rounded-[30px] flex justify-center items-center text-white inter font-bold m-4 ${
          isFormValid ? "bg-[#FF8E48]" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Confirm To Pay
      </button>
    </>
  );
};

export default SeatForm;
