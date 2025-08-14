import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProjects } from './ourProjectsThunks';

export interface IProject {
  imgPath: string;
  title: string;
  filters: string[];
  linkName: string;
  linkPath: string;
}

interface IOurProjectsState {
  projects: IProject[];
  filteredProjects: IProject[];
}

const initialState: IOurProjectsState = {
  projects: [],
  filteredProjects: [],
};

export const ourProjectsSlice = createSlice({
  name: 'ourProjects-slice',
  initialState,
  reducers: {
    filterProjects: (state, action: PayloadAction<string>) => {
      const filter = action.payload.toLowerCase();

      if (filter === 'все') {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter((project) =>
          project.filters.some((f) => f.toLowerCase() === filter),
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProjects.fulfilled,
      (state, action: PayloadAction<IProject[]>) => {
        state.projects = action.payload;
        state.filteredProjects = action.payload;
      },
    );
  },
});

export const { filterProjects } = ourProjectsSlice.actions;
export default ourProjectsSlice.reducer;
