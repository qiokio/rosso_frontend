import axios from 'axios';

export interface StatsItem {
  name: string;
  stat: string;
  previousStat: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

export interface ActivityItem {
  id: string;
  type: string;
  user: string;
  status: 'success' | 'failed' | 'warning';
  timestamp: string;
  details?: string;
}

export interface DashboardData {
  stats: StatsItem[];
  activities: ActivityItem[];
}

// 创建axios实例
const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDashboardStats = async (): Promise<StatsItem[]> => {
  try {
    const response = await apiClient.get('/dashboard/stats');
    if (response.data.success) {
      return response.data.stats || [];
    }
    throw new Error(response.data.message || '获取仪表盘统计数据失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '获取仪表盘统计数据失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export const getRecentActivities = async (limit: number = 10): Promise<ActivityItem[]> => {
  try {
    const response = await apiClient.get(`/dashboard/activities?limit=${limit}`);
    if (response.data.success) {
      return response.data.activities || [];
    }
    throw new Error(response.data.message || '获取最近活动数据失败');
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '获取最近活动数据失败');
    }
    throw new Error('无法连接到服务器');
  }
};

export const getDashboardData = async (): Promise<DashboardData> => {
  try {
    const [stats, activities] = await Promise.all([
      getDashboardStats(),
      getRecentActivities(5)
    ]);

    return {
      stats,
      activities
    };
  } catch (error) {
    console.error('获取仪表盘数据失败:', error);
    throw error;
  }
};