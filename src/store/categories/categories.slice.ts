import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../store";

interface CategoriesState {
    categoriesMap: Object | null,
    isLoading: boolean,
    error: Error | null,
}

const InitCategoriesSate: CategoriesState = {
    categoriesMap: null,
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
        setCategories: (state, action: PayloadAction<Object>) => {
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
export const selectCategoriesMap = (state: RootState) => state.categories.categoriesMap;
export default categoriesSlice.reducer;