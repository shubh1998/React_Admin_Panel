import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  open: true
}

const hamSlice = createSlice({
  name: 'hamSlice',
  initialState: defaultState,
  reducers: {
    handleDrawerToggle: (state) => {
      return {
        open: !state.open
      }
    }
  }
})

export const { handleDrawerToggle } = hamSlice.actions

export default hamSlice.reducer
