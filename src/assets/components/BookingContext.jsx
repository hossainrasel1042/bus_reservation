import React, { createContext, useState, useContext } from 'react';

// Create the context
const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  // Set initial state for 'from', 'to', and 'date'
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  // Update functions
  const updateFrom = (value) => setFrom(value);
  const updateTo = (value) => setTo(value);
  const updateDate = (value) => setDate(value);

  return (
    <BookingContext.Provider
      value={{
        from,
        to,
        date,
        updateFrom,
        updateTo,
        updateDate,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the booking context
export const useBookingContext = () => {
  return useContext(BookingContext);
};
