import React, { useState, useEffect } from 'react';
import { PlusIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { 
  getApplications, 
  createApplication, 
  updateApplication, 
  deleteApplication,
  Application,
  CreateApplicationData,
  UpdateApplicationData 
} from '../services/applicationService';

const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingApp, setEditingApp] = useState<Application | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    type: 'saml' as 'saml' | 'oidc',
    redirectUri: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setIsLoading(true);
      const apps = await getApplications();
      setApplications(apps);
    } catch (error) {
      console.error('加载应用列表失败:', error);
      // 可以在这里添加错误提示
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddApplication = () => {
    setFormData({
      name: '',
      url: '',
      type: 'saml',
      redirectUri: ''
    });
    setShowAddModal(true);
  };

  const handleEditApplication = (app: Application) => {
    setEditingApp(app);
    setFormData({
      name: app.name,
      url: app.url,
      type: app.type,
      redirectUri: app.redirectUri || ''
    });
    setShowEditModal(true);
  };

  const handleDeleteApplication = async (id: string) => {
    if (!confirm('确定要删除这个应用吗？')) {
      return;
    }
    
    try {
      await deleteApplication(id);
      await loadApplications(); // 重新加载列表
    } catch (error) {
      console.error('删除应用失败:', error);
      alert('删除应用失败，请重试');
    }
  };

  const handleSubmitAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      const createData: CreateApplicationData = {
        name: formData.name,
        type: formData.type,
        url: formData.url,
        redirectUri: formData.redirectUri || undefined
      };
      
      await createApplication(createData);
      setShowAddModal(false);
      await loadApplications(); // 重新加载列表
    } catch (error) {
      console.error('创建应用失败:', error);
      alert('创建应用失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !editingApp) return;
    
    try {
      setIsSubmitting(true);
      const updateData: UpdateApplicationData = {
        name: formData.name,
        url: formData.url,
        redirectUri: formData.redirectUri || undefined
      };
      
      await updateApplication(editingApp.id, updateData);
      setShowEditModal(false);
      setEditingApp(null);
      await loadApplications(); // 重新加载列表
    } catch (error) {
      console.error('更新应用失败:', error);
      alert('更新应用失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        <h1 className="text-2xl font-semibold text-gray-900">应用程序管理</h1>
        <button
          type="button"
          onClick={handleAddApplication}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          添加应用
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
                      {app.status === 'active' ? '活跃' : '停用'}
                    </span>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        type="button"
                        onClick={() => handleEditApplication(app)}
                        className="mr-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <PencilSquareIcon className="-ml-1 mr-1 h-4 w-4" aria-hidden="true" />
                        编辑
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteApplication(app.id)}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <TrashIcon className="-ml-1 mr-1 h-4 w-4 text-red-500" aria-hidden="true" />
                        删除
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      创建于: {formatDate(app.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 添加应用模态框 */}
      {showAddModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowAddModal(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    添加新应用
                  </h3>
                  <div className="mt-2">
                    <form onSubmit={handleSubmitAdd} className="space-y-4">
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            应用名称
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                            应用URL
                          </label>
                          <div className="mt-1">
                            <input
                              type="url"
                              name="url"
                              id="url"
                              value={formData.url}
                              onChange={handleInputChange}
                              required
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            协议类型
                          </label>
                          <div className="mt-1">
                            <select
                              id="type"
                              name="type"
                              value={formData.type}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="saml">SAML 2.0</option>
                              <option value="oidc">OpenID Connect</option>
                            </select>
                          </div>
                        </div>

                        {formData.type === 'oidc' && (
                          <div className="sm:col-span-6">
                            <label htmlFor="redirectUri" className="block text-sm font-medium text-gray-700">
                              重定向URI
                            </label>
                            <div className="mt-1">
                              <input
                                type="url"
                                name="redirectUri"
                                id="redirectUri"
                                value={formData.redirectUri}
                                onChange={handleInputChange}
                                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmitAdd}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '添加中...' : '添加'}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 编辑应用模态框 */}
      {showEditModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowEditModal(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    编辑应用
                  </h3>
                  <div className="mt-2">
                    <form onSubmit={handleSubmitEdit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700">
                            应用名称
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="edit-name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="edit-url" className="block text-sm font-medium text-gray-700">
                            应用URL
                          </label>
                          <div className="mt-1">
                            <input
                              type="url"
                              name="url"
                              id="edit-url"
                              value={formData.url}
                              onChange={handleInputChange}
                              required
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label className="block text-sm font-medium text-gray-700">
                            协议类型
                          </label>
                          <div className="mt-1">
                            <div className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700">
                              {formData.type === 'saml' ? 'SAML 2.0' : 'OpenID Connect'}
                            </div>
                            <p className="mt-1 text-xs text-gray-500">协议类型创建后不可修改</p>
                          </div>
                        </div>

                        {formData.type === 'oidc' && (
                          <div className="sm:col-span-6">
                            <label htmlFor="edit-redirectUri" className="block text-sm font-medium text-gray-700">
                              重定向URI
                            </label>
                            <div className="mt-1">
                              <input
                                type="url"
                                name="redirectUri"
                                id="edit-redirectUri"
                                value={formData.redirectUri}
                                onChange={handleInputChange}
                                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmitEdit}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '保存中...' : '保存'}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setShowEditModal(false)}
                >
                  取消
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
