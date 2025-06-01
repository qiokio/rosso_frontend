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

const API_BASE_URL = 'http://localhost:8787';

export const getDashboardStats = async (): Promise<StatsItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dashboard/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.stats || [];
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};

export const getRecentActivities = async (limit: number = 10): Promise<ActivityItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dashboard/activities?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.activities || [];
  } catch (error) {
    console.error('Error fetching recent activities:', error);
    throw error;
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
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};