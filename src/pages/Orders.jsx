// ✅ src/pages/Orders.jsx
import { useAuth } from "../context/auth/AuthContext";

const Orders = () => {
  const { user } = useAuth();
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  // Filter orders for current user
  const userOrders = orders.filter((order) => order.user === user?.email);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">🧾 Order History</h2>

      {userOrders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        userOrders.map((order, index) => (
          <div key={index} className="border-b py-4 space-y-2">
            <p>
              <strong>Date:</strong> {new Date(order.date).toLocaleString()}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Total:</strong> ${order.total.toFixed(2)}
            </p>
            <ul className="list-disc ml-6">
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
