import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-semibold text-gray-800">Cloudflare SSO</span>
        </div>

        <div className="flex items-center">
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="sr-only">u6253u5f00u7528u6237u83dcu5355</span>
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {user?.username.slice(0, 1).toUpperCase()}
                </div>
                <span className="ml-2 text-gray-700">{user?.username}</span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      u4e2au4ebau8d44u6599
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      u8bbeu7f6e
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        logout();
                      }}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      u9000u51fa
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
