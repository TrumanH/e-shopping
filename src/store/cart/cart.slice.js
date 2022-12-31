import { createSlice } from "@reduxjs/toolkit";

const InitCartState = {
    isCartOpen: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// helper functions 
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

const updateTotal = (state) => {
    const newTotalQuantity = state.cartItems.reduce((sum, item)=>sum+item.quantity, 0);
    state.totalQuantity = newTotalQuantity;
    const newTotalPrice = state.cartItems.reduce((sum, item)=>sum+item.quantity*item.price, 0);
    state.totalPrice = newTotalPrice; 
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: InitCartState,
    reducers: {
      setCartOpen: state => {
        state.isCartOpen = !state.isCartOpen;
      },
      addItem: (state, action) => {
        state.cartItems = addItemToCart(state.cartItems, action.payload);
        updateTotal(state);
      },
      decreaseItem: (state, action) => {
        state.cartItems = descreaseItemFromCart(state.cartItems, action.payload);
        updateTotal(state);
      },
      removeItem: (state, action) => {
        state.cartItems = removeItemFromCart(state.cartItems, action.payload);
        updateTotal(state);
      },
    },
});

export const { setCartOpen, addItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;