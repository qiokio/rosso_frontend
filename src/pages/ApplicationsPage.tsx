import { useState, useEffect } from 'react';
import { PlusIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

interface Application {
  id: string;
  name: string;
  type: 'saml' | 'oidc';
  url: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    // u6a21u62dfu4eceAPIu83b7u53d6u6570u636e
    setTimeout(() => {
      setApplications([
        {
          id: '1',
          name: 'u516cu53f8u95e8u6237',
          type: 'saml',
          url: 'https://portal.example.com',
          status: 'active',
          createdAt: '2023-01-15T00:00:00Z',
        },
        {
          id: '2',
          name: 'u5de5u5355u7cfbu7edf',
          type: 'oidc',
          url: 'https://tickets.example.com',
          status: 'active',
          createdAt: '2023-02-20T00:00:00Z',
        },
        {
          id: '3',
          name: 'CRMu7cfbu7edf',
          type: 'saml',
          url: 'https://crm.example.com',
          status: 'active',
          createdAt: '2023-03-10T00:00:00Z',
        },
        {
          id: '4',
          name: 'u6587u6863u7ba1u7406',
          type: 'oidc',
          url: 'https://docs.example.com',
          status: 'inactive',
          createdAt: '2023-04-05T00:00:00Z',
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddApplication = () => {
    setShowAddModal(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">u5e94u7528u7a0bu5e8fu7ba1u7406</h1>
        <button
          type="button"
          onClick={handleAddApplication}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          u6dfbu52a0u5e94u7528
        </button>
      </div>

      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {applications.map((app) => (
            <li key={app.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${app.type === 'saml' ? 'bg-purple-100' : 'bg-green-100'}`}>
                      <span className={`text-sm font-medium ${app.type === 'saml' ? 'text-purple-800' : 'text-green-800'}`}>{app.type.toUpperCase()}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-blue-600">{app.name}</p>
                      <p className="text-sm text-gray-500">{app.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${app.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {app.status === 'active' ? 'u6d3bu8dc3' : 'u505cu7528'}
                    </span>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        type="button"
                        className="mr-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <PencilSquareIcon className="-ml-1 mr-1 h-4 w-4" aria-hidden="true" />
                        u7f16u8f91
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <TrashIcon className="-ml-1 mr-1 h-4 w-4 text-red-500" aria-hidden="true" />
                        u5220u9664
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      u521bu5efau4e8e: {formatDate(app.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* u6dfbu52a0u5e94u7528u6a21u6001u6846 */}
      {showAddModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowAddModal(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    u6dfbu52a0u65b0u5e94u7528
                  </h3>
                  <div className="mt-2">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label htmlFor="app-name" className="block text-sm font-medium text-gray-700">
                            u5e94u7528u540du79f0
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="app-name"
                              id="app-name"
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="app-url" className="block text-sm font-medium text-gray-700">
                            u5e94u7528URL
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="app-url"
                              id="app-url"
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="app-type" className="block text-sm font-medium text-gray-700">
                            u534fu8baeu7c7bu578b
                          </label>
                          <div className="mt-1">
                            <select
                              id="app-type"
                              name="app-type"
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="saml">SAML 2.0</option>
                              <option value="oidc">OpenID Connect</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  u6dfbu52a0
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  u53d6u6d88
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
