import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginService, logoutService } from 'API/services/auth.service'
import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { TOASTER_TYPE } from 'utils/constants/constants'

export const operatorLogin = createAsyncThunk('operator/login', async (loginData, thunkApi) => {
  try {
    const res = await loginService(loginData)
    console.log('res========', res)
    thunkApi.dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'Logged in successfully !!',
      toasterType: TOASTER_TYPE.success
    }))
    // if (res.data.success) {
    //   localStorage.setItem('authtoken', res.headers.authtoken)
    // }
    return res
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data)
  }
})

export const operatorLogout = createAsyncThunk('operator/logout', async () => {
  const res = await logoutService()
  return res
})
