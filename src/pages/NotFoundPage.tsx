import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">u9875u9762u4e0du5b58u5728</h2>
          <p className="mt-2 text-base text-gray-500">u62b1u6b49, u60a8u8bdfu5230u4e86u4e00u4e2au4e0du5b58u5728u7684u9875u9762.</p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              u8fd4u56deu9996u9875
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
