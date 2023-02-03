import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number,
  imageUrl: string,
}

export interface CartState {
  isCartOpen: boolean | null,
  cartItems: CartItem[],
  totalQuantity: number,
  totalPrice: number,
}

const InitCartState: CartState = {
    isCartOpen: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// helper functions 
const addItemToCart = (cartItems: CartItem[], itemToAdd: CartItem) => {
    const existItem = cartItems.find((item)=> item.id===itemToAdd.id);
    if (existItem) {
        // If exist, just increase the quantity of the exist item.
        return cartItems.map((item)=> item.id===itemToAdd.id ? {...item, quantity: item.quantity+1} : item);
    } // Otherwise, add new item to the cart.
    return [...cartItems, itemToAdd];
};

const descreaseItemFromCart = (cartItems: CartItem[], itemToDecrease: CartItem) => {
    const existItem = cartItems.find((item)=>item.id===itemToDecrease.id);
    if (existItem && existItem.quantity>1) {
      return cartItems.map((item)=> item.id===itemToDecrease.id ? {...item, quantity:item.quantity-1} : item);
    } else { // existItem.quantity <= 1
      return cartItems.filter((item) => item.id!==itemToDecrease.id);
    }
};

const removeItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem) => cartItems.filter((item) => item.id!==itemToRemove.id);

const updateTotal = (state: CartState) => {
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
      cleanUpItems: (state) => {
        state.cartItems = []
        state.isCartOpen = false
        state.totalPrice = 0
        state.totalQuantity = 0
      },
    },
});

export const { setCartOpen, addItem, decreaseItem, removeItem, cleanUpItems } = cartSlice.actions;
export default cartSlice.reducer;