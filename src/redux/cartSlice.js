import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeItem,
} = cartSlice.actions;
