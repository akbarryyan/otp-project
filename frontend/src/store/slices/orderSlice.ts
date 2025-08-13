import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  serviceId: string;
  phone: string;
  status: "pending" | "active" | "completed" | "cancelled";
  otp: string | null;
  createdAt: string;
  price: number;
}

interface OrderState {
  activeOrders: Order[];
  orderHistory: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  activeOrders: [],
  orderHistory: [],
  loading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.activeOrders.unshift(action.payload);
    },
    updateOrder: (state, action: PayloadAction<Order>) => {
      const index = state.activeOrders.findIndex(
        (order) => order.id === action.payload.id
      );
      if (index !== -1) {
        if (["completed", "cancelled"].includes(action.payload.status)) {
          state.activeOrders.splice(index, 1);
          state.orderHistory.unshift(action.payload);
        } else {
          state.activeOrders[index] = action.payload;
        }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addOrder, updateOrder, setLoading, setError } =
  orderSlice.actions;
export default orderSlice.reducer;
