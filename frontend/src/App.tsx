import { Routes, Route } from "react-router-dom";
import Layout from "@components/Layout";
import Landing from "@pages/Landing";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Dashboard from "@pages/Dashboard";
import Services from "@pages/Services";
import ActiveOrders from "@pages/ActiveOrders";
import OrderHistory from "@pages/OrderHistory";
import Profile from "@pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="active-orders" element={<ActiveOrders />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
