import { combineReducers, configureStore } from '@reduxjs/toolkit';
//Redux helps you manage "global" state - state that is needed across many parts of your application. 

export const store = configureStore({
  reducer: {user:userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
