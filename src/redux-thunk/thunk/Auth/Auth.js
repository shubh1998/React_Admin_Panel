import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginService, logoutService } from 'API/services/auth.service'
import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { ROUTE_PATHS, TOASTER_TYPE, TOKEN } from 'utils/constants/constants'

/**
 * Operator Login Thunk
 */
export const operatorLogin = createAsyncThunk('operator/login', async ({ username, password, navigate }, thunkApi) => {
  try {
    const res = await loginService({ username, password })
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
      toasterMessage: error[0].description,
      toasterType: TOASTER_TYPE.error
    }))
    return thunkApi.rejectWithValue(error[0].description)
  }
})

/**
 * Operator Logout Thunk
 */
export const operatorLogout = createAsyncThunk('operator/logout', async ({ navigate }, thunkApi) => {
  try {
    const res = await logoutService()
    localStorage.removeItem(TOKEN)
    navigate(ROUTE_PATHS.login, {
      replace: true
    })
    return res
  } catch (error) {
    thunkApi.dispatch(handleToaster({
      openToaster: true,
      toasterMessage: error[0].description,
      toasterType: TOASTER_TYPE.error
    }))
    return thunkApi.rejectWithValue(error[0].description)
  }
})
