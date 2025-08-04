import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStagesState } from './stages.interface';

const initialState: IStagesState = {
  currentStage: null,
};

export const stagesSlice = createSlice({
  name: 'stages-slice',
  initialState,
  reducers: {
    changeCurrentStage: (state, action: PayloadAction<number>) => {
      state.currentStage = action.payload;
    },
  },
});

export const { changeCurrentStage } = stagesSlice.actions;
export default stagesSlice.reducer;
