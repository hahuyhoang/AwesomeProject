import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./feature/basketSlice"
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})