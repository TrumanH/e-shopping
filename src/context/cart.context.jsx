import { useState, createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>null,
});

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setCartOpen ] = useState(false);
    const value = {isCartOpen, setCartOpen};
     
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};

export const CartItems = createContext({
    items: [],
    setItems:()=>null,
});

export const CartItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const value = {items, setItems};
    return (
        <CartItems.Provider value={value}>{ children}</CartItems.Provider>
    );
}