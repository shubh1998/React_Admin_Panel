import { createSlice } from '@reduxjs/toolkit'
import { operatorLogin, operatorLogout } from 'redux-thunk/thunk/Auth/Auth'
const defaultAuthState = {
  loginLoading: false,
  pageLoading: false
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: defaultAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operatorLogin.fulfilled, (state, action) => {
        return {
          ...defaultAuthState,
          loginLoading: false
        }
      })
      .addCase(operatorLogin.pending, (state, action) => {
        return {
          ...defaultAuthState,
          loginLoading: true
        }
      })
      .addCase(operatorLogin.rejected, (state, action) => {
        return {
          ...defaultAuthState,
          loginLoading: false
        }
      })
      .addCase(operatorLogout.fulfilled, (state, action) => {
        return {
          ...defaultAuthState,
          pageLoading: false
        }
      })
      .addCase(operatorLogout.pending, (state, action) => {
        return {
          ...defaultAuthState,
          pageLoading: true
        }
      })
      .addCase(operatorLogout.rejected, (state, action) => {
        return {
          ...defaultAuthState,
          pageLoading: false
        }
      })
  }
})

export default userSlice.reducer
