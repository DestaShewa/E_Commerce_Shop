// ✅ src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

export const useAuth = () => useContext(AuthContext);
