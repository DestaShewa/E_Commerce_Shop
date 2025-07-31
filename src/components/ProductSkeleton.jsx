// ✅ src/components/ProductSkeleton.jsx
const ProductSkeleton = () => {
  return (
    <div className="border rounded shadow p-4 bg-white animate-pulse">
      <div className="h-48 bg-gray-200 mb-4"></div>
      <div className="h-4 bg-gray-200 mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 mb-4 w-1/2"></div>
      <div className="h-8 bg-gray-300 rounded w-full"></div>
    </div>
  );
};

export default ProductSkeleton;
