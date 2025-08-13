import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { ordersApi, servicesApi } from "../services/api";
import { setServices } from "../store/slices/servicesSlice";
import { updateOrder } from "../store/slices/orderSlice";

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const activeOrders = useSelector(
    (state: RootState) => state.orders.activeOrders
  );
  const services = useSelector((state: RootState) => state.services.list);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [servicesRes, activeOrdersRes] = await Promise.all([
          servicesApi.getServices(),
          ordersApi.getActiveOrders(),
        ]);

        dispatch(setServices(servicesRes.data));
        activeOrdersRes.data.forEach((order: any) => {
          dispatch(updateOrder(order));
        });
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Welcome to OTP Services
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Get started by browsing our services or check your active orders
              below.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Active Orders
          </h3>
          <div className="mt-4">
            {activeOrders.length === 0 ? (
              <p className="text-sm text-gray-500">
                No active orders at the moment.
              </p>
            ) : (
              <div className="mt-4 divide-y divide-gray-200">
                {activeOrders.map((order) => {
                  const service = services.find(
                    (s) => s.id === order.serviceId
                  );
                  return (
                    <div key={order.id} className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {service?.name || "Unknown Service"}
                          </p>
                          <p className="text-sm text-gray-500">
                            Status: {order.status}
                          </p>
                        </div>
                        {order.otp && (
                          <div className="ml-4">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              OTP: {order.otp}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
