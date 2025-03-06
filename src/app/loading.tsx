export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <h2 className="text-lg text-gray-700 mt-4">Loading portfolio...</h2>
      </div>
    </div>
  );
} 