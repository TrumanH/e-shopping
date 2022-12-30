import { createContext, useReducer } from "react";

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

const InitCartState = {
    isCartOpen: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const Cart_Action_Types = {
  TOGGLE_CART_OPEN: "toggle_cart_open",
  SET_CART_ITEMS: "set_cart_items",
}

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

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Cart_Action_Types.TOGGLE_CART_OPEN:
      return {...state, isCartOpen: !state.isCartOpen};
    
    case Cart_Action_Types.SET_CART_ITEMS:
      return {...payload, isCartOpen: state.isCartOpen};
    
    default:
      throw new Error("Unhandled action type: ", type);
  }
};

export const CartProvider = ({ children }) => {
    const [{isCartOpen, cartItems, totalQuantity, totalPrice}, dispatch] = useReducer(cartReducer, InitCartState);

    const updateCartItemsReducer = (cartItems) => {
      const newTotalQuantity = cartItems.reduce((sum, item)=>sum+item.quantity, 0);
      const newTotalPrice = cartItems.reduce((sum, item)=>sum+item.quantity*item.price, 0);
      dispatch({type: Cart_Action_Types.SET_CART_ITEMS, 
        payload: {cartItems: cartItems, totalQuantity: newTotalQuantity, totalPrice: newTotalPrice}});
    };

    const setCartOpen = ()=> {
      dispatch({type: Cart_Action_Types.TOGGLE_CART_OPEN});
    };

    const addItem = (product) => {
      const newCartItems = addItemToCart(cartItems, product);
      updateCartItemsReducer(newCartItems);
    };

    const decreaseItem = (prodcut) => {
      const newCartItems = descreaseItemFromCart(cartItems, prodcut);
      updateCartItemsReducer(newCartItems);
    };

    const removeItem = (product) => {
      const newCartItems = removeItemFromCart(cartItems, product);
      updateCartItemsReducer(newCartItems);
    }
    const value = {isCartOpen, setCartOpen, cartItems, addItem, decreaseItem, removeItem, totalQuantity, totalPrice};
     
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
