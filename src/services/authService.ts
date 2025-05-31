import axios from 'axios';

// 根据环境确定API URL
const API_URL = '/api';

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  username: string;
  email: string;
  role: string;
}

const login = async (username: string, password: string): Promise<UserData> => {
  try {
    const response = await apiClient.post('/login', { email: username, password });
    return response.data.user;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '登录失败');
    }
    throw new Error('无法连接到服务器');
  }
};

const logout = async (): Promise<void> => {
  try {
    await apiClient.post('/logout', {});
  } catch (error) {
    console.error('登出时出错', error);
    throw error;
  }
};

const getCurrentUser = async (): Promise<UserData | null> => {
  try {
    const response = await apiClient.get('/me');
    return response.data.user;
  } catch (error) {
    console.error('获取当前用户信息失败', error);
    return null;
  }
};

// 添加刷新token的方法
const refreshToken = async (): Promise<boolean> => {
  try {
    await apiClient.post('/refresh');
    return true;
  } catch (error) {
    console.error('刷新token失败', error);
    return false;
  }
};

export const authService = {
  login,
  logout,
  getCurrentUser,
  refreshToken
};
