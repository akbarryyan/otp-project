import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "@store/index";
import { ordersApi } from "@services/api";
import { setError } from "@store/slices/orderSlice";

// Add the missing action types
const SET_ORDER_HISTORY = "orders/setOrderHistory";
const setOrderHistory = (orders: OrderHistoryItem[]) => ({
  type: SET_ORDER_HISTORY,
  payload: orders,
});

interface OrderHistoryItem {
  id: string;
  serviceId: string;
  phone: string;
  status: string;
  otp: string | null;
  createdAt: string;
  price: number;
}

export default function OrderHistory() {
  const dispatch = useDispatch<AppDispatch>();
  const orderHistory = useSelector(
    (state: RootState) => state.orders.orderHistory
  );
  const services = useSelector((state: RootState) => state.services.list);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await ordersApi.getOrderHistory();
        dispatch(setOrderHistory(response.data));
      } catch (error) {
        console.error("Error fetching order history:", error);
        dispatch(setError("Failed to load order history"));
      }
    };

    fetchOrderHistory();
  }, [dispatch]);

  if (orderHistory.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-base font-semibold text-gray-900">
          No Order History
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          You haven't placed any orders yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Order History
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Your past orders and their details.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <ul role="list" className="divide-y divide-gray-200">
          {orderHistory.map((order) => {
            const service = services.find((s) => s.id === order.serviceId);
            return (
              <li key={order.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-primary-600">
                      {service?.name || "Unknown Service"}
                    </h4>
                    <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-2">
                      <p className="text-sm text-gray-500">
                        Phone: {order.phone}
                      </p>
                      <p className="text-sm text-gray-500">
                        Price: ${order.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Status: {order.status}
                      </p>
                      <p className="text-sm text-gray-500">
                        Date: {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>
                    {order.otp && (
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                          OTP: {order.otp}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ${
                        order.status === "completed"
                          ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
                          : "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
