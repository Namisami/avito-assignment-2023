import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './slices/gamesSlice';

const store = configureStore({
  reducer: gamesReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

