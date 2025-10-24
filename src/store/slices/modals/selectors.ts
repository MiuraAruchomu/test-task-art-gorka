import { RootState } from '@/store/store';

export const selectActiveModals = (state: RootState) =>
  state.modals.activeModals;
