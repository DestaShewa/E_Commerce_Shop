// ✅ src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(email, password);
      navigate("/"); // Redirect after success
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        required
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Create Account
      </button>
    </form>
  );
};

export default Register;
