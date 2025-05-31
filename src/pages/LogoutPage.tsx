import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LogoutPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
        // u767bu51fau540eu91cdu5b9au5411u5230u767bu5f55u9875u9762
        navigate('/login');
      } catch (error) {
        console.error('u767bu51fau5931u8d25', error);
        navigate('/login');
      }
    };

    performLogout();
  }, [logout, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">u6b63u5728u767bu51fa...</h2>
        <div className="mt-8 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
