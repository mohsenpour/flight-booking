import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './slices/flightsSlice';

let store = configureStore({
  reducer: { flights: flightsReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
