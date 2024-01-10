import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const menuStateSlice = createSlice({
  name: 'menuStateStore',
  initialState,
  reducers: {
    setMenuStateAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMenuStateAction } = menuStateSlice.actions;

export const getMenuState = (state: { menuStateStore: boolean }) => state.menuStateStore;

export default menuStateSlice.reducer;
