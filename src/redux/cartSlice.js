import { createSlice } from '@reduxjs/toolkit';

export const cartInitialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, { payload }) {
      if (state.find(({ name }) => name === payload.name)) {
        return;
      }

      return [...state, payload];
    },
    removeFromCart(state, { payload }) {
      return state.filter(item => item.name !== payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cart = cartSlice.reducer;
