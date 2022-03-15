import { createSlice } from '@reduxjs/toolkit'
import { operatorLogin, operatorLogout } from 'redux-thunk/thunk/Auth/Auth'
const defaultAuthState = null

const userSlice = createSlice({
  name: 'userSlice',
  initialState: defaultAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operatorLogin.fulfilled, (state, action) => {
        state.isLoggedin = true
      })
      .addCase(operatorLogout.fulfilled, (state, action) => {
        state.isLoggedin = false
        localStorage.clear()
      })
  }
})

export default userSlice.reducer
