// ✅ src/pages/Cart.jsx
import { useCart } from "../context/cart/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">🛒 Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 underline">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-3"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} className="h-16 w-16 object-contain" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
              className="w-14 border rounded px-2 py-1 text-center"
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 text-right text-xl font-bold">
        Total: ${total.toFixed(2)}
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
