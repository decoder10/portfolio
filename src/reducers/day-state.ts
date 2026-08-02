import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = (): TDayState => {
  const savedTheme = typeof window !== 'undefined' ? sessionStorage.getItem('dayState') : null;

  if (savedTheme === 'light-theme' || savedTheme === 'dark-theme') {
    return savedTheme;
  }

  const currentHour = new Date().getHours();

  return currentHour >= 6 && currentHour < 18 ? 'light-theme' : 'dark-theme';
};

const initialState: TDayState = getInitialTheme();

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
