import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  balance: number;
}

interface Transaction {
  id: string;
  amount: number;
  type: "credit" | "debit";
  description: string;
  createdAt: string;
}

interface UserState {
  user: User | null;
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  transactions: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.balance = action.payload;
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

export const { setUser, setTransactions, updateBalance, setLoading, setError } =
  userSlice.actions;
export default userSlice.reducer;
