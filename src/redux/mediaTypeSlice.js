import { createSlice } from '@reduxjs/toolkit';

export const MediaTypeInitialState = null;

const MediaTypeSlice = createSlice({
  name: 'mediaType',
  initialState: MediaTypeInitialState,
  reducers: {
    setMediaType(state, { payload }) {
      return payload;
    },
  },
});

export const { setMediaType } = MediaTypeSlice.actions;
export const mediaType = MediaTypeSlice.reducer;
