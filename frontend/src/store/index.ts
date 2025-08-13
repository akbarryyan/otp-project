import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "@store/slices/servicesSlice";
import orderReducer from "@store/slices/orderSlice";
import userReducer from "@store/slices/userSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    orders: orderReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
