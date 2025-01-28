import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
};

export default useAuthRedirect;
