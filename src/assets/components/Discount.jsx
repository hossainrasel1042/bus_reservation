import React from 'react'
const Discount = ({ price, discountPercentage, origin, destination, departureTime, arrivalTime, onBook }) => {
    const discountedPrice = price * (1 - discountPercentage / 100);
    const savings = price - discountedPrice;
  
    return (
      <div className="bg-white rounded-lg shadow-md p-4 border border-orange-300">
        <div className="flex flex-col mb-2">
          <div className="flex items-center">
            <span className="text-gray-600">Route: </span>
            <span className="font-bold text-orange-600 mx-1">{origin}</span>
            <span>to</span>
            <span className="font-bold text-orange-600 mx-1">{destination}</span>
          </div>
          <div className="flex items-center ">
            <span className="text-gray-600">
              {departureTime} - {arrivalTime}
            </span>
          </div>
          <div className="flex justify-between items-center"> {/* Main change here */}
            <div>
              <span className="text-lg font-semibold">Original Price:</span>
              <span className="text-lg ml-1 line-through text-gray-500">{price} BDT</span>
            </div>
            <div className="flex flex-col gap-3 items-center"> {/* Added a wrapper for the button */}
              <span className="text-lg font-bold text-green-600 mr-3"> {/* Added margin-right for spacing */}
                {discountedPrice.toFixed(2)} BDT
              </span>
              <button
                onClick={onBook}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm" // Reduced font size
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">You Save: {savings.toFixed(2)} BDT ({discountPercentage}%)</span>
        </div>
      </div>
    );
  };
  export default Discount