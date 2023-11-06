import { configureStore } from "@reduxjs/toolkit";
import attributeReducer from "./atributesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["attributes"],
};

const persistedReducer = persistReducer(persistConfig, attributeReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
