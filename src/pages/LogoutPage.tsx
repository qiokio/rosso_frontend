import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/api/auth/logout');
        localStorage.removeItem('token');
        // 登出后重定向到登录页面
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        console.error('登出失败', error);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    };
    logout();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">正在登出...</h2>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
