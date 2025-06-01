import axios from 'axios';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'locked';
  lastLogin: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: string;
  status?: 'active' | 'inactive' | 'locked';
}

// 创建axios实例
const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await apiClient.get('/users');
    if (response.data.success) {
      return response.data.users || [];
    }
    throw new Error(response.data.message || '获取用户列表失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '获取用户列表失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export const createUser = async (userData: CreateUserRequest): Promise<User> => {
  try {
    const response = await apiClient.post('/users', userData);
    if (response.data.success) {
      return response.data.user;
    }
    throw new Error(response.data.message || '创建用户失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '创建用户失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export const updateUser = async (userId: string, userData: UpdateUserRequest): Promise<User> => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData);
    if (response.data.success) {
      return response.data.user;
    }
    throw new Error(response.data.message || '更新用户失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '更新用户失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    const response = await apiClient.delete(`/users/${userId}`);
    if (!response.data.success) {
      throw new Error(response.data.message || '删除用户失败');
    }
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '删除用户失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export const getUserById = async (userId: string): Promise<User> => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    if (response.data.success) {
      return response.data.user;
    }
    throw new Error(response.data.message || '获取用户详情失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '获取用户详情失败');
    }
    throw new Error('无法连接到服务器');
  }
};