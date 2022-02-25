import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  open: false,
  message: 'this is demo',
  type: 'success'
}

const toasterSlice = createSlice({
  name: 'toasterSlice',
  initialState: defaultState,
  reducers: {
    handleToaster: (state, { payload }) => {
      return {
        ...payload
      }
    }
  }
})

export const { handleToaster } = toasterSlice.actions

export default toasterSlice.reducer
