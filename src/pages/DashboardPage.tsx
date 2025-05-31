import { useState, useEffect } from 'react';

interface StatsItem {
  name: string;
  stat: string;
  previousStat: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const DashboardPage = () => {
  const [stats, setStats] = useState<StatsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟从API获取数据
    setTimeout(() => {
      setStats([
        {
          name: '活跃用户',
          stat: '1,248',
          previousStat: '1,103',
          change: '12%',
          changeType: 'increase',
        },
        {
          name: '今日登录',
          stat: '342',
          previousStat: '294',
          change: '16%',
          changeType: 'increase',
        },
        {
          name: '集成应用',
          stat: '24',
          previousStat: '22',
          change: '9%',
          changeType: 'increase',
        },
        {
          name: '失败登录尝试',
          stat: '18',
          previousStat: '29',
          change: '38%',
          changeType: 'decrease',
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-900">仪表盘</h1>
      
      {/* 统计卡片 */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.stat}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <span
                  className={`font-medium ${
                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.changeType === 'increase' ? '↑' : '↓'} {item.change}
                </span>{' '}
                <span className="text-gray-500">相比上周</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 最近活动 */}
      <h2 className="mt-8 text-lg font-medium text-gray-900">最近活动</h2>
      <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">用户登录</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      成功
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      user{item}@example.com
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {Math.floor(Math.random() * 60)} 分钟前
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
