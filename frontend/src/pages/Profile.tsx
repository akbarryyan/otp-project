import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { userApi } from "../services/api";
import { setUser, setTransactions } from "../store/slices/userSlice";

export default function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const transactions = useSelector(
    (state: RootState) => state.user.transactions
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [profileRes, transactionsRes] = await Promise.all([
          userApi.getProfile(),
          userApi.getTransactions(),
        ]);

        dispatch(setUser(profileRes.data));
        dispatch(setTransactions(transactionsRes.data));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  if (!user) {
    return (
      <div className="text-center py-12">
        <h3 className="text-base font-semibold text-gray-900">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Profile Information
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.username}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Current Balance
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                ${user.balance.toFixed(2)}
              </dd>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Transaction History
          </h3>
          <div className="mt-4">
            {transactions.length === 0 ? (
              <p className="text-sm text-gray-500">No transactions yet.</p>
            ) : (
              <ul role="list" className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <li key={transaction.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {transaction.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(transaction.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ${
                            transaction.type === "credit"
                              ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
                              : "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20"
                          }`}
                        >
                          {transaction.type === "credit" ? "+" : "-"}$
                          {Math.abs(transaction.amount).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
