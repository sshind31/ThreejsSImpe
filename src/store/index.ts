import { configureStore } from '@reduxjs/toolkit';
import shapesReducer from './slices/shapesSlice';

export const store = configureStore({
  reducer: {
    shapes: shapesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;