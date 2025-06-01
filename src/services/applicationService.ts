import axios from 'axios';

// 创建axios实例
const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Application {
  id: string;
  name: string;
  type: 'saml' | 'oidc';
  url: string;
  status: 'active' | 'inactive';
  createdAt: string;
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  entityId?: string;
  acsUrl?: string;
  ssoUrl?: string;
  certificate?: string;
}

export interface CreateApplicationData {
  name: string;
  type: 'saml' | 'oidc';
  url: string;
  redirectUri?: string;
}

export interface UpdateApplicationData {
  name?: string;
  url?: string;
  status?: 'active' | 'inactive';
  redirectUri?: string;
}

// 获取应用列表
const getApplications = async (): Promise<Application[]> => {
  try {
    const response = await apiClient.get('/applications');
    if (response.data.success) {
      return response.data.applications;
    }
    throw new Error(response.data.message || '获取应用列表失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '获取应用列表失败');
    }
    throw new Error('无法连接到服务器');
  }
};

// 获取单个应用详情
const getApplication = async (id: string): Promise<Application> => {
  try {
    const response = await apiClient.get(`/applications/${id}`);
    if (response.data.success) {
      return response.data.application;
    }
    throw new Error(response.data.message || '获取应用详情失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '获取应用详情失败');
    }
    throw new Error('无法连接到服务器');
  }
};

// 创建应用
const createApplication = async (data: CreateApplicationData): Promise<Application> => {
  try {
    const response = await apiClient.post('/applications', data);
    if (response.data.success) {
      return response.data.application;
    }
    throw new Error(response.data.message || '创建应用失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '创建应用失败');
    }
    throw new Error('无法连接到服务器');
  }
};

// 更新应用
const updateApplication = async (id: string, data: UpdateApplicationData): Promise<Application> => {
  try {
    const response = await apiClient.put(`/applications/${id}`, data);
    if (response.data.success) {
      return response.data.application;
    }
    throw new Error(response.data.message || '更新应用失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '更新应用失败');
    }
    throw new Error('无法连接到服务器');
  }
};

// 删除应用
const deleteApplication = async (id: string): Promise<void> => {
  try {
    const response = await apiClient.delete(`/applications/${id}`);
    if (!response.data.success) {
      throw new Error(response.data.message || '删除应用失败');
    }
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '删除应用失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export {
  getApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};