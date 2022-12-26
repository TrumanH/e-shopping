import { useState, useEffect, createContext } from "react";
// import SHOP_DATA from '../shop-data.js';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categories: {},
    setCategories: ()=>null,
});

export const CategoriesProvider = ({ children }) => {
    const [ categories, setCategories] = useState({});
    const value = {categories};
    useEffect(() => {
        const getCategoriesMap = async ()=> {
            const categoriesMap = await getCollectionAndDocuments();
            setCategories(categoriesMap);
            console.log(categoriesMap);
        };
        getCategoriesMap(); 
    }, []);
     
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);
};