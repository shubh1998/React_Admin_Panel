import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  openHam: true
}

const hamSlice = createSlice({
  name: 'hamSlice',
  initialState: defaultState,
  reducers: {
    handleDrawerToggle: (state) => {
      return {
        openHam: !state.openHam
      }
    }
  }
})

export const { handleDrawerToggle } = hamSlice.actions

export default hamSlice.reducer
