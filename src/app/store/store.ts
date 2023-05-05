import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { coursesApi } from '@store/courses';
import { lessonsReducer } from '@store/lessons';
import { userReducer } from './users/models/auth-slice';
import { databaseApi } from './database';
import { authApi } from './users';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: persistedReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [databaseApi.reducerPath]: databaseApi.reducer,
    lessons: lessonsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    authApi.middleware,
    coursesApi.middleware,
    databaseApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
