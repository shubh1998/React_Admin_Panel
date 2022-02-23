import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './User/userSlice'
import hamSlice from './Ham/hamSlice'

export const rootReducer = combineReducers({
  user: userReducer,
  ham: hamSlice
})
