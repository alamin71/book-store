const SkeletonLoaderSinglebook = () => {
  return (
    <div className="max-w-lg shadow-md p-5 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>
      <div className="h-64 bg-gray-300 rounded mb-8 w-1/2"></div>
      <div className="space-y-4">
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 rounded w-2/3"></div>
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded w-full mt-6"></div>
    </div>
  );
};

export default SkeletonLoaderSinglebook;
