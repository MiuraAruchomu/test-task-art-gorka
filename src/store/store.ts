import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/header/headerSlice';
import modalsReducer from './slices/modals/modalsSlice';
import ourProjectsReducer from './slices/ourProjects/ourProjectsSlice';
import stagesReducer from './slices/stages/stagesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerReducer,
      modals: modalsReducer,
      ourProjects: ourProjectsReducer,
      stages: stagesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
