import { createSlice } from '@reduxjs/toolkit';

export const sellerInitialState = null;

const sellerSlice = createSlice({
  name: 'seller',
  initialState: sellerInitialState,
  reducers: {
    setSeller(state, { payload }) {
      return payload;
    },
    resetSeller(state, { payload }) {
      return sellerInitialState;
    },
  },
});

export const { setSeller, resetSeller } = sellerSlice.actions;
export const seller = sellerSlice.reducer;
