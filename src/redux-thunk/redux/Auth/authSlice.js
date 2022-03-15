import { createSlice } from '@reduxjs/toolkit'
import { operatorLogin, operatorLogout } from 'redux-thunk/thunk/Auth/Auth'
const defaultAuthState = null

const userSlice = createSlice({
  name: 'userSlice',
  initialState: defaultAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operatorLogin.fulfilled, (state, action) => {})
      .addCase(operatorLogout.fulfilled, (state, action) => {})
  }
})

export default userSlice.reducer
