import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import { getCategoriesStart, setCategories, getCategoriesFailed } from './categories.slice';

// redux thunk arrow function
export const getCategories = ()=> async (dispatch, getState)=>{
    const state = getState();
    if (state.categories.categoriesMap) {
        return // if categories data in redux already persist in local, don't fetch new and return. 
    }
    dispatch(getCategoriesStart());
    // console.log("fire getCategories");
    try {
        const categoriesMap = await getCollectionAndDocuments();
        dispatch(setCategories(categoriesMap));
    } catch (error) {
        dispatch(getCategoriesFailed(error.message));
    }
};