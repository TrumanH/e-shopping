import { createSlice } from "@reduxjs/toolkit";

const InitCategoriesSate = {
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
        setCategories: (state, action) => {
            state.categoriesMap = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getCategoriesFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const { getCategoriesStart, setCategories, getCategoriesFailed } = categoriesSlice.actions;
export default categoriesSlice.reducer;