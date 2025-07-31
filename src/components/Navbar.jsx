import { Link } from "react-router-dom";
import { useCart } from "../context/cart/CartContext";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icon lib or use Unicode

const Navbar = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🛍️ MyShop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/cart" className="hover:text-blue-600">
            Cart ({cartItems.length})
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-100 px-4 py-2 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)} className="block">
            Cart ({cartItems.length})
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
