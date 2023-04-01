import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../store";
export interface Product {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
};

export interface ProductDetail {
  category: string,
  id: number,
  imageUrl: string,
  name: string,
  title: string,
  price: number,
  desc: string,
};

export interface Category {
  title: string;
  imageUrl: string;
  items: Product[];
};
  
export interface CategoryMap {
  [key: string]: Product[];
};
interface CategoriesState {
  categoriesMap: CategoryMap,
  isLoading: boolean,
  error: Error | null,
}

const InitCategoriesSate: CategoriesState = {
  categoriesMap: {},
  isLoading: false,
  error: null
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: InitCategoriesSate,
  reducers: {
    getCategoriesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // getCategoriesSucceeded
    setCategories: (state, action: PayloadAction<CategoryMap>) => {
      state.categoriesMap = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getCategoriesFailed: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { getCategoriesStart, setCategories, getCategoriesFailed } = categoriesSlice.actions;
export const selectCategoriesMap = (state: RootState) => state.categories.categoriesMap
export default categoriesSlice.reducer;