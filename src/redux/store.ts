import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './userSlice';
import { vacancyAPI } from './VacancyQueries';

const persistConfig = { key: 'user', storage };
const persistedUserReducer = persistReducer(persistConfig, user);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [vacancyAPI.reducerPath]: vacancyAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(vacancyAPI.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };
