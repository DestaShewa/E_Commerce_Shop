// ✅ src/components/ProductCard.jsx
import { useCart } from "../context/cart/CartContext";
import { useToast } from "../context/toast/ToastContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addToCart(product);
    showToast("Added to cart!");
  };

  return (
    <div className="border rounded shadow p-4 bg-white hover:shadow-lg transition">
      {/* ✅ Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain w-full mb-4"
      />

      {/* ✅ Product Title */}
      <h2 className="font-semibold text-lg mb-2 line-clamp-2">
        {product.title}
      </h2>

      {/* ✅ Product Price */}
      <p className="text-green-700 font-bold mb-3">${product.price}</p>

      {/* ✅ Buttons */}
      <div className="flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          View Details
        </Link>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
