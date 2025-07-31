import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <input
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

export default Login;
