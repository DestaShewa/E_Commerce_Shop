import { useContext } from "react";
import { CartContext } from "./cart/CartContext";

export const useCart = () => useContext(CartContext);
