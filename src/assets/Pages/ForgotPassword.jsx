import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement logic to handle forget password request here
    // This might involve sending a reset link or OTP to the user
    // based on username and phone number

    console.log('Username:', username);
    console.log('Phone Number:', phoneNumber);

    // Example: Show a success message after handling the request
    alert('A password reset link has been sent to your email or phone number.');

    // Optionally, redirect to login page after successful submission
    // navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border-[1px] border-solid border-[#FF8E48]">
        <h2 className="text-[40px] inter text-[#FF8E48] font-bold mb-6 text-center">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-[#FF8E48] font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-[#FF8E48] font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FCA166] via-[#FF8E48] to-[#FF8E48] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600 mr-2">Remember your password?</span>
          <a href="/login" className="text-[#FF8E48] inter bold hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;