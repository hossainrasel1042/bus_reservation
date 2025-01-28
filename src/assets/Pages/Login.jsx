import React, { useState,useEffect } from 'react';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate=useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/user/overview'); 
    }
  }, [navigate])
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username,
          password,
        });
  
        const { token } = response.data;
  
        localStorage.setItem('token', token);
  
        navigate('/user/overview');
      } catch (error) {
        console.log('error')
      }
    };
  
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border-[1px] border-solid border-[#FF8E48]">
        <h2 className="text-[40px] inter text-[#FF8E48] font-bold mb-6 text-center">Login</h2>

        <div className="flex justify-center space-x-6 mb-6">
          <FaGithub
            className="text-3xl text-gray-800 hover:text-gray-900 cursor-pointer"
          />
          <FaGoogle
            className="text-3xl text-red-600 hover:text-red-700 cursor-pointer"
          />
          <FaFacebook
            className="text-3xl text-blue-600 hover:text-blue-700 cursor-pointer"
          />
        </div>

        <form onSubmit={(e) => { e.preventDefault(); console.log("login") }}>
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
            <label htmlFor="password" className="block text-[#FF8E48] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#FCA166] via-[#FF8E48] to-[#FF8E48] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-[#FF8E48] inter bold hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-600 mr-2">Don't have an account?</span>
          <Link to="/register" className="text-[#FF8E48] inter bold hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;