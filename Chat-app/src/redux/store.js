import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import sliceReducer from "./features/slices";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main",
  storage,
};

// Combine your individual reducers into a root reducer
const rootReducer = combineReducers({
    slice1: sliceReducer,
    // Add more reducers here
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor };
