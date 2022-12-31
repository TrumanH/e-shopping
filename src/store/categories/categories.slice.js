import { createSlice } from "@reduxjs/toolkit";

const InitCategoriesSate = {
    categories: {},
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: InitCategoriesSate,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    }
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;