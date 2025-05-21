import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userId");
    navigate('/login', { replace: true });
  }, [navigate]);

  return null; 
};

export default UserLogout;
