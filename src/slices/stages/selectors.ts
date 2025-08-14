import { RootState } from '@/shared/store/store';

export const selectCurrentStage = (state: RootState) =>
  state.stages.currentStage;
