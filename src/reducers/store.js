import { configureStore } from "@reduxjs/toolkit";
import { launchesApi } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(launchesApi.middleware),
})

setupListeners(store.dispatch);