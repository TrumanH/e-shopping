import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{},
    cartItems: [],
    addItem: ()=>{},
    decreaseItem: ()=>{},
    removeItem: ()=>{},
    totalQuantity: 0,
    totalPrice: 0,
});

const addItemToCart = (cartItems, itemToAdd) => {
    const existItem = cartItems.find((item)=> item.id===itemToAdd.id);
    if (existItem) {
        // If exist, just increase the quantity of the exist item.
        return cartItems.map((item)=> item.id===itemToAdd.id ? {...item, quantity: item.quantity+1} : item);
    } // Otherwise, add new item to the cart.
    return [...cartItems, itemToAdd];
};

const descreaseItemFromCart = (cartItems, itemToDecrease) => {
    const existItem = cartItems.find((item)=>item.id===itemToDecrease.id);
    if (existItem.quantity===1) {
        return cartItems.filter((item) => item.id!==itemToDecrease.id);
    } else { // existItem.quantity > 1
        return cartItems.map((item)=> item.id===itemToDecrease.id ? {...item, quantity:item.quantity-1} : item);
    }
};

const removeItemFromCart = (cartItems, itemToRemove) => cartItems.filter((item) => item.id!==itemToRemove.id);

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ totalQuantity, setTotalQuantity ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(()=>{
        const newTotalQuantity = cartItems.reduce((sum, item)=>sum+item.quantity, 0);
        setTotalQuantity(newTotalQuantity);
    }, [cartItems]);

    useEffect(()=>{
        const newTotalPrice = cartItems.reduce((sum, item)=>sum+item.quantity*item.price, 0);
        setTotalPrice(newTotalPrice);
    } ,[cartItems]);

    const addItem = (product) => {
        setCartItems(addItemToCart(cartItems, product));
    };

    const decreaseItem = (prodcut) => {
        setCartItems(descreaseItemFromCart(cartItems, prodcut));
    };

    const removeItem = (product) => {
        setCartItems(removeItemFromCart(cartItems, product));
    }
    const value = {isCartOpen, setCartOpen, cartItems, addItem, decreaseItem, removeItem, totalQuantity, totalPrice};
     
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
