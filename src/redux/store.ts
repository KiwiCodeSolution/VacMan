import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import noticeSlice from "./noticeSlice";
import user from "./userSlice";
import { vacancyAPI } from "./VacancyQueries";
import notificationsSlice from "./notificationsSlice";

const persistConfig = { key: "user", storage };
const persistedUserReducer = persistReducer(persistConfig, user);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [vacancyAPI.reducerPath]: vacancyAPI.reducer,
    notice: noticeSlice,
    notification: notificationsSlice,
  },
  // eslint-disable-next-line prettier/prettier
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(vacancyAPI.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };
