import React, { useState } from 'react';
import useAuthRedirect from '../components/useAuthRedirect';

const Setting = () => {
    useAuthRedirect();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePhoneNumber = () => {
    // Implement phone number update logic here (e.g., API call)
    if (phoneNumber.length === 11) {
      setMessage('Phone number updated successfully!');
      setPhoneNumber('')
    }
    else{
      setMessage('Please enter a valid phone number')
    }
    
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
        if(newPassword.length >= 6){
            setMessage('Password changed successfully!');
            setNewPassword('')
            setConfirmPassword('')
        }
        else{
            setMessage('Password must be at least 6 characters long')
        }
      
    } else {
      setMessage('Passwords do not match.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 ">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 border border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">Settings</h2>

        {message && <p className="mb-4 text-center text-green-600">{message}</p>} {/* Display message */}

        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your new phone number"
          />
          <button
            onClick={handleUpdatePhoneNumber}
            className="mt-2 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
          >
            Update Phone Number
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
          />
          <button
            onClick={handleChangePassword}
            className="mt-2 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;