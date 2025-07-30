import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalsState } from './modals.interface';
import { TModalOpen, TModalClose } from './modals.type';

const initialState: IModalsState = {
  activeModals: [],
};

export const modalsSlice = createSlice({
  name: 'modals-slice',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TModalOpen>) => {
      state.activeModals.push(action.payload);
    },
    closeModal: (state, action: PayloadAction<TModalClose>) => {
      state.activeModals.splice(state.activeModals.indexOf(action.payload), 1);
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;
