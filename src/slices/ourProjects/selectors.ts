import { RootState } from '@/shared/store/store';

export const selectFilteredProjects = (state: RootState) =>
  state.ourProjects.filteredProjects;
