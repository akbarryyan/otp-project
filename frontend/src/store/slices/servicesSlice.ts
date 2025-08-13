import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Service {
  id: string;
  name: string;
  operator: string;
  country: string;
  price: number;
}

interface ServicesState {
  list: Service[];
  countries: string[];
  operators: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  list: [],
  countries: [],
  operators: [],
  loading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.list = action.payload;
      state.countries = [
        ...new Set(action.payload.map((service) => service.country)),
      ];
      state.operators = [
        ...new Set(action.payload.map((service) => service.operator)),
      ];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setServices, setLoading, setError } = servicesSlice.actions;
export default servicesSlice.reducer;
