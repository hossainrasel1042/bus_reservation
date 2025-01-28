import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaBus } from 'react-icons/fa';
import useAuthRedirect from '../components/useAuthRedirect';

const MyBookings = () => {
    useAuthRedirect();
  const [bookings, setBookings] = useState([
    {
      id: 1,
      busName: 'Green Line',
      origin: 'Dhaka',
      destination: 'Chittagong',
      departureDate: '2024-03-20',
      departureTime: '8:00 AM',
      arrivalTime: '4:00 PM',
      price: 550,
      seats: 'A1, B3, C2',
    },
    {
      id: 2,
      busName: 'Shohag Paribahan',
      origin: 'Sylhet',
      destination: 'Dhaka',
      departureDate: '2024-03-25',
      departureTime: '10:00 AM',
      arrivalTime: '6:00 PM',
      price: 400,
      seats: 'D5, E1',
    },
    {
        id: 1,
        busName: 'Green Line',
        origin: 'Dhaka',
        destination: 'Chittagong',
        departureDate: '2024-03-20',
        departureTime: '8:00 AM',
        arrivalTime: '4:00 PM',
        price: 550,
        seats: 'A1, B3, C2',
      },
       {
        id: 1,
        busName: 'Green Line',
        origin: 'Dhaka',
        destination: 'Chittagong',
        departureDate: '2024-03-20',
        departureTime: '8:00 AM',
        arrivalTime: '4:00 PM',
        price: 550,
        seats: 'A1, B3, C2',
      }
  ]);
  const handleCancelTicket = (bookingId) => {
    console.log(`Cancelling ticket for booking ID: ${bookingId}`);
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
  };

  const handleDownloadTicket = (bookingId) => {
    console.log(`Downloading ticket for booking ID: ${bookingId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">My Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-md p-6 border border-orange-300">
              <div className="flex items-center mb-4">
                <FaBus className="text-orange-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{booking.busName}</h2>
              </div>
              <div className="mb-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{booking.origin} to {booking.destination}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{booking.departureDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>{booking.departureTime} - {booking.arrivalTime}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-600">Seats: {booking.seats}</p>
                  <span className="text-lg font-bold text-orange-600">{booking.price} BDT</span>
                </div>
              </div>
              <div className="flex space-x-2"> {/* This is the line with spacing between buttons */}
                <button
                  onClick={() => handleCancelTicket(booking.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-sm whitespace-nowrap"
                >
                  Cancel Ticket
                </button>
                <button
                  onClick={() => handleDownloadTicket(booking.id)}
                  className="bg-[#FF8E48] hover:opacity-90 text-white font-bold py-2 px-3 rounded text-sm whitespace-nowrap"
                >
                  Download Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;