import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import categoriesReducer from './categories/categories.slice';
import cartReducer from './cart/cart.slice';
// root reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});