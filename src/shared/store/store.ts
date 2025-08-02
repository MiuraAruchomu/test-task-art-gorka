import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '@/features/header/headerSlice';
import modalsReducer from '@/features/modals/modalsSlice';
import ourProjectsReducer from '@/features/ourProjects/ourProjectsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerReducer,
      modals: modalsReducer,
      ourProjects: ourProjectsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
