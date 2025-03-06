const LoadingSkeleton = ({ type }: { type: 'me' | 'education' | 'experience' | 'projects' | 'skills' }) => {
  switch (type) {
    case 'me':
      return (
        <div className="animate-pulse flex space-x-4 mb-8 p-6 bg-gray-800 rounded-lg">
          <div className="rounded-full bg-gray-700 h-20 w-20"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-8 bg-gray-700 rounded w-1/4"></div>
              <div className="h-8 bg-gray-700 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      );
    case 'education':
      return (
        <div className="mb-8">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-lg">
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'experience':
      return (
        <div className="mb-8">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-lg">
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'projects':
      return (
        <div className="mb-8">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-lg">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
                <div className="h-20 bg-gray-700 rounded mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 bg-gray-700 rounded w-16"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'skills':
      return (
        <div className="mb-8">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-lg">
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center">
                      <div className="h-8 w-8 bg-gray-700 rounded-full mr-2"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-700 rounded mb-1 w-1/4"></div>
                        <div className="h-2 bg-gray-700 rounded w-full">
                          <div 
                            className="h-2 bg-blue-500 rounded" 
                            style={{width: `${25 * j}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default LoadingSkeleton; 