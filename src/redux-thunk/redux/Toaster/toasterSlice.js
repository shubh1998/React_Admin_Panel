import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  open: false,
  message: '',
  type: 'success'
}

const toasterSlice = createSlice({
  name: 'toasterSlice',
  initialState: defaultState,
  reducers: {
    handleToaster: (state, { payload }) => {
      return {
        ...defaultState,
        ...payload
      }
    }
  }
})

export const { handleToaster } = toasterSlice.actions

export default toasterSlice.reducer
