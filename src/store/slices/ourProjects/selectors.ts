import { RootState } from '@/store/store';

export const selectFilteredProjects = (state: RootState) =>
  state.ourProjects.filteredProjects;
