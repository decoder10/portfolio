import { createSlice } from '@reduxjs/toolkit';

const initialState: TDayState = '';

export const dayStateSlice = createSlice({
  name: 'dayStateStore',
  initialState,
  reducers: {
    setDayStateAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDayStateAction } = dayStateSlice.actions;

export const getDayState = (state: { dayStateStore: TDayState }) => state.dayStateStore;

export default dayStateSlice.reducer;
