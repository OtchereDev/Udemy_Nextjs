import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./slices/AuthSlices"

export const store = configureStore({
  reducer: {
      auth:AuthReducer
  },
})