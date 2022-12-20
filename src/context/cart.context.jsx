import { useState, createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{},
    cartItems: [],
    addItem: ({item})=>{},
});

const addItemToCart = (cartItems, itemToAdd)=> {
    const existItem = cartItems.find((item)=> item.id===itemToAdd.id);
    if (existItem) {
        // If exist, just increase the quantity of the exist item.
        return cartItems.map((item)=> item.id===itemToAdd.id ? {...item, quantity: item.quantity+itemToAdd.quantity} : item);
    } // Otherwise, add new item to the cart.
    return [...cartItems, itemToAdd];
};

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const addItem = (product)=> {
        setCartItems(addItemToCart(cartItems, product));
    };
    const value = {isCartOpen, setCartOpen, cartItems, addItem};
     
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
