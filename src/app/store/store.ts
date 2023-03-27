import { configureStore } from '@reduxjs/toolkit';
import { lessonsReducer } from '@store/lessons';
import { coursesApi } from './courses';

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    lessons: lessonsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    coursesApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
