import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray‑50 min-h-screen">
      <Navbar />
      <main className="p‑4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
