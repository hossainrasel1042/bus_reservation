import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      navigate('/user'); 
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  return null; 
};

export default Home;
