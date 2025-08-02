import { OUR_PROJECTS } from '@/components/sections/ourProjects/list/list.config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filteredProjects: OUR_PROJECTS,
};

export const ourProjectsSlice = createSlice({
  name: 'ourProjects-slice',
  initialState,
  reducers: {
    filterProjects: (state, action: PayloadAction<string>) => {
      const filter = action.payload.toLowerCase();

      if (filter === 'все') {
        state.filteredProjects = OUR_PROJECTS;
      } else {
        state.filteredProjects = OUR_PROJECTS.filter((project) =>
          project.filters.some((f) => f.toLowerCase() === filter),
        );
      }
    },
  },
});

export const { filterProjects } = ourProjectsSlice.actions;
export default ourProjectsSlice.reducer;
