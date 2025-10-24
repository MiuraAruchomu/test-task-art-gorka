import { RootState } from '@/store/store';

export const selectCurrentStage = (state: RootState) =>
  state.stages.currentStage;
