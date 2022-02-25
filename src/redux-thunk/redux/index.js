import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './User/userSlice'
import hamSlice from './Ham/hamSlice'
import toasterSlice from './Toaster/toasterSlice'

export const rootReducer = combineReducers({
  user: userReducer,
  ham: hamSlice,
  toaster: toasterSlice
})
