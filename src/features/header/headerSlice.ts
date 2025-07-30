import { IHeaderState } from './header.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IHeaderState = {
  isDropdownMenuOpen: false,
};

export const headerSlice = createSlice({
  name: 'header-slice',
  initialState,
  reducers: {
    toggleDropdownMenu: (state) => {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    },
    closeDropdownMenu: (state) => {
      state.isDropdownMenuOpen = false;
    },
  },
});

export const { toggleDropdownMenu, closeDropdownMenu } = headerSlice.actions;
export default headerSlice.reducer;
