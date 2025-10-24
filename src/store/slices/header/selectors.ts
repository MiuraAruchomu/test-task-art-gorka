import { RootState } from '@/store/store';

export const selectIsDropdownMenuOpen = (state: RootState) =>
  state.header?.isDropdownMenuOpen;
