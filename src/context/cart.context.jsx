import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{},
    cartItems: [],
    addItem: ({item})=>{},
    totalQuantity: 0,
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
    const [ totalQuantity, setTotalQuantity ] = useState(0);

    useEffect(()=>{
        const newTotalQuantity = cartItems.reduce((sum, item)=>{ return sum+item.quantity}, 0);
        setTotalQuantity(newTotalQuantity);
    }, [cartItems]);

    const addItem = (product)=> {
        setCartItems(addItemToCart(cartItems, product));
    };
    const value = {isCartOpen, setCartOpen, cartItems, addItem, totalQuantity};
     
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
