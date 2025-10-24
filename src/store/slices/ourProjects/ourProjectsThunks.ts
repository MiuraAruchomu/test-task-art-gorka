import { IProject } from '@/store/slices/ourProjects/ourProjectsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProjects = createAsyncThunk<IProject[]>(
  'ourProjects/getProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/projects');
      return response.json();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  },
);
