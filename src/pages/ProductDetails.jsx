// ✅ src/pages/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/cart/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (!product)
    return <div className="text-center text-red-500">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded-lg">
      <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Products
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-yellow-500 font-semibold mb-2">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
