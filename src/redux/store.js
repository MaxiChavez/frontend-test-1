import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import atributesSlice from "./atributesSlice.js";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const reducers = combineReducers({
  attributes: atributesSlice
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["attributes"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;