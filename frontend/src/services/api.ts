import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const servicesApi = {
  getServices: () => api.get("/services"),
  getServiceById: (id: string) => api.get(`/services/${id}`),
};

export const ordersApi = {
  createOrder: (serviceId: string) => api.post("/orders", { serviceId }),
  getActiveOrders: () => api.get("/orders/active"),
  getOrderHistory: () => api.get("/orders/history"),
  getOrderById: (id: string) => api.get(`/orders/${id}`),
  setOrderStatus: (id: string, status: string) =>
    api.patch(`/orders/${id}/status`, { status }),
};

export const userApi = {
  getProfile: () => api.get("/user/profile"),
  getTransactions: () => api.get("/user/transactions"),
  updateProfile: (data: any) => api.patch("/user/profile", data),
};

export default api;
