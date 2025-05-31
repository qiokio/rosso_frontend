import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  WindowIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'u4eeau8868u76d8', href: '/', icon: HomeIcon },
  { name: 'u5e94u7528u7a0bu5e8f', href: '/applications', icon: WindowIcon },
  { name: 'u7528u6237u7ba1u7406', href: '/users', icon: UsersIcon },
  { name: 'u7cfbu7edfu8bbeu7f6e', href: '/settings', icon: Cog6ToothIcon },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-white font-bold text-xl">Cloudflare SSO</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const current = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 ${
                      current ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
