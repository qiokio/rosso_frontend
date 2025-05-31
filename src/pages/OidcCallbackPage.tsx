import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const OidcCallbackPage = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const processCallback = async () => {
      try {
        // 获取URL中的授权码
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const state = params.get('state');
        
        if (!code) {
          setError('未找到授权码');
          return;
        }
        
        // 发送授权码到后端进行处理
        const response = await axios.post('/api/oidc/callback', {
          code,
          state
        }, {
          withCredentials: true
        });
        
        if (response.data.success) {
          // 认证成功，重定向到首页或请求的资源
          const redirectUrl = state ? decodeURIComponent(state) : '/';
          navigate(redirectUrl);
        } else {
          setError(response.data.message || 'OIDC认证失败');
        }
      } catch (err: any) {
        console.error('OIDC回调处理错误', err);
        setError(err.response?.data?.message || '处理OIDC响应时出错');
      }
    };

    processCallback();
  }, [location, navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">认证失败</h2>
          <div className="mt-2 text-center text-sm text-gray-600">
            <p>{error}</p>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate('/login')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              返回登录
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">正在处理OIDC响应...</h2>
        <div className="mt-8 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default OidcCallbackPage;
