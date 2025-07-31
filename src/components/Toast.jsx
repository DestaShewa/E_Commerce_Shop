const Toast = ({ message, type = "success" }) => {
  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded shadow text-white z-50 transition-all duration-300
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      {message}
    </div>
  );
};

export default Toast;
