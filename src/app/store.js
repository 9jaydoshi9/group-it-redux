import { configureStore } from "@reduxjs/toolkit";
import groupSlice from '../features/group/groupSlice'

export const store = configureStore({
  reducer: {
    group: groupSlice
  }
})