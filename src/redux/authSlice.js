import { createSlice } from '@reduxjs/toolkit';

export const authInitialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    phone: null,
    address: null,
    avatarUrl: null,
    verify: null,
  },
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth(state, { payload }) {
      return payload;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    refreshAuth(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    resetAuth() {
      return authInitialState;
    },
  },
});

export const { setAuth, setUser, resetAuth, refreshAuth } = authSlice.actions;
export const auth = authSlice.reducer;
