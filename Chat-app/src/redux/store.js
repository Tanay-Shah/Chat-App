import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sliceReducer from "./features/slices";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main",
  storage,
  keyPrefix: 'redux-'
};

// Combine your individual reducers into a root reducer
const rootReducer = combineReducers({
  slice1: sliceReducer,
  // Add more reducers here
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state invariant middleware
    }),
});

// Create a persistor (IMPORTANT PART)
const persistor = persistStore(store);

// optional
export {persistor}