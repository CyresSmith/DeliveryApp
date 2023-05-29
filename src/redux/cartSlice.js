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
    changeItemInCart(state, { payload }) {
      state = state.map(item => {
        if (item.name !== payload.name) {
          return item;
        }
        item.count = payload.count;
        item.total = payload.total;

        return item;
      });
    },
    resetCart() {
      return cartInitialState;
    },
  },
});

export const { addToCart, removeFromCart, changeItemInCart, resetCart } =
  cartSlice.actions;
export const cart = cartSlice.reducer;
