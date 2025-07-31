import { useState } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "../../components/Toast";

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showToast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && <Toast message={message} />}
    </ToastContext.Provider>
  );
};
