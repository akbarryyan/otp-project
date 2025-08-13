import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@store/index";
import { ordersApi } from "@services/api";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const services = useSelector((state: RootState) => state.services.list);
  const countries = useSelector((state: RootState) => state.services.countries);
  const operators = useSelector((state: RootState) => state.services.operators);

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedOperator, setSelectedOperator] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCountry =
      !selectedCountry || service.country === selectedCountry;
    const matchesOperator =
      !selectedOperator || service.operator === selectedOperator;
    const matchesSearch =
      !searchQuery ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesOperator && matchesSearch;
  });

  const navigate = useNavigate();

  const handleOrder = async (serviceId: string) => {
    try {
      await ordersApi.createOrder(serviceId);
      navigate("/active-orders");
    } catch (error) {
      console.error("Error creating order:", error);
      // We could add a toast notification here for errors
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="operator"
                className="block text-sm font-medium text-gray-700"
              >
                Operator
              </label>
              <select
                id="operator"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={selectedOperator}
                onChange={(e) => setSelectedOperator(e.target.value)}
              >
                <option value="">All Operators</option>
                {operators.map((operator) => (
                  <option key={operator} value={operator}>
                    {operator}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Search
              </label>
              <input
                type="text"
                id="search"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg overflow-hidden">
        <ul role="list" className="divide-y divide-gray-200">
          {filteredServices.map((service) => (
            <li key={service.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-primary-600 truncate">
                    {service.name}
                  </p>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      {service.operator} • {service.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-900 mr-4">
                    ${service.price.toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOrder(service.id)}
                    className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Order
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
