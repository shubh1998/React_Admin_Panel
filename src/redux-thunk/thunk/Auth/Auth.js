import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginService, logoutService } from 'API/services/auth.service'
import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { ROUTE_PATHS, TOASTER_TYPE, TOKEN } from 'utils/constants/constants'

export const operatorLogin = createAsyncThunk('operator/login', async ({ username, password, navigate }, thunkApi) => {
  try {
    const res = await loginService({ username, password })
    console.log('res========', res)
    thunkApi.dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'Logged in successfully !!',
      toasterType: TOASTER_TYPE.success
    }))
    localStorage.setItem(TOKEN, res.accessToken)
    navigate(ROUTE_PATHS.dashboard, {
      replace: true
    })
    return res
  } catch (error) {
    thunkApi.dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'Logged in failed !!',
      toasterType: TOASTER_TYPE.error
    }))
    return thunkApi.rejectWithValue(error.response.data)
  }
})

export const operatorLogout = createAsyncThunk('operator/logout', async ({ navigate }, thunkApi) => {
  try {
    const res = await logoutService()
    localStorage.clear()
    navigate(ROUTE_PATHS.login, {
      replace: true
    })
    return res
  } catch (error) {
    thunkApi.dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'Logged in failed !!',
      toasterType: TOASTER_TYPE.error
    }))
    return thunkApi.rejectWithValue(error.response.data)
  }
})
