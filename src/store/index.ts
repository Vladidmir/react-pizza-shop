import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filterSlice/filterSlice'
import orderReducer from './slices/orderSlice/orderSlice'
import pizzaReducer from './slices/pizzaSlice/pizzaSlice'




export const store = configureStore({
  reducer: { filterReducer, orderReducer, pizzaReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;