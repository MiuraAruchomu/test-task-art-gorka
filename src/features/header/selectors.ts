import { RootState } from '@/shared/store/store';

export const selectIsDropdownMenuOpen = (state: RootState) =>
  state.header?.isDropdownMenuOpen;
