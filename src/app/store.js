import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/counter/userSlice";
import priceReducer from "../features/counter/PriceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    price: priceReducer,
  },
});
