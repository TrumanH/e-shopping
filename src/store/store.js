import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
// root reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});