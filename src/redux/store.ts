import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './userSlice';

const persistConfig = { key: 'user', storage };
const persistedUserReducer = persistReducer(persistConfig, user);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    // vacancies: persistedVacancy
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
  ],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };
