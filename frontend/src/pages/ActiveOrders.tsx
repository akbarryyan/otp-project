import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { ordersApi } from "../services/api";
import { updateOrder } from "../store/slices/orderSlice";

export default function ActiveOrders() {
  const dispatch = useDispatch<AppDispatch>();
  const activeOrders = useSelector(
    (state: RootState) => state.orders.activeOrders
  );
  const services = useSelector((state: RootState) => state.services.list);

  useEffect(() => {
    // Poll for updates every 10 seconds
    const interval = setInterval(async () => {
      try {
        const response = await ordersApi.getActiveOrders();
        response.data.forEach((order: any) => {
          dispatch(updateOrder(order));
        });
      } catch (error) {
        console.error("Error polling active orders:", error);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSetStatus = async (orderId: string, status: string) => {
    try {
      const response = await ordersApi.setOrderStatus(orderId, status);
      dispatch(updateOrder(response.data));
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (activeOrders.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-base font-semibold text-gray-900">
          No Active Orders
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          You don't have any active orders at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <ul role="list" className="divide-y divide-gray-200">
        {activeOrders.map((order) => {
          const service = services.find((s) => s.id === order.serviceId);
          return (
            <li key={order.id} className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {service?.name || "Unknown Service"}
                  </h3>
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
                      Created: {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  {order.otp && (
                    <div className="mt-2">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        OTP: {order.otp}
                      </span>
                    </div>
                  )}
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="space-y-2">
                    {order.status === "active" && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleSetStatus(order.id, "resend")}
                          className="block w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
                        >
                          Resend OTP
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSetStatus(order.id, "completed")}
                          className="block w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                        >
                          Complete
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => handleSetStatus(order.id, "cancelled")}
                      className="block w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
