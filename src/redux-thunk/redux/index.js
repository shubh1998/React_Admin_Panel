import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'
import hamSlice from './Ham/hamSlice'
import toasterSlice from './Toaster/toasterSlice'

export const rootReducer = combineReducers({
  auth: authSlice,
  ham: hamSlice,
  toaster: toasterSlice
})
