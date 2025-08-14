import { RootState } from '@/shared/store/store';

export const selectActiveModals = (state: RootState) =>
  state.modals.activeModals;
