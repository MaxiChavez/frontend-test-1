import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import attributeReducer from "./atributesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Attributes"],
};

const persistedReducer = persistReducer(persistConfig, attributeReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
