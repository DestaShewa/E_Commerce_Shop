// ✅ src/pages/Checkout.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) return;
    setSubmitted(true);
    clearCart();
    setTimeout(() => navigate("/"), 4000); // Redirect after 4 seconds
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4">
          🎉 Order Placed Successfully!
        </h2>
        <p className="mb-2">Thank you, {form.name}.</p>
        <p>We’ll ship your order to: {form.address}</p>
        <p className="text-green-600 mt-4 font-bold">
          Total Paid: ${total.toFixed(2)}
        </p>
        <p className="mt-6 text-gray-500 text-sm">Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <div className="text-right font-bold">Total: ${total.toFixed(2)}</div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
