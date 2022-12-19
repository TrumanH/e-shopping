import { useState, useEffect, createContext } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductContext = createContext({
    user: null,
    setUser: ()=>null,
});

export const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState(null);
    const value = {products, setProducts};
    useEffect(() => {
        setProducts(SHOP_DATA);
    }, []);
     
    return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>);
};