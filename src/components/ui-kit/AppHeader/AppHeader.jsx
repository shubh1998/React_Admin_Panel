import React from 'react'
import { AppBar, StyledToolbar } from './AppHeader.styles'

export const AppHeader = ({ left, right, open = true, handleDrawer = () => {}, ...props }) => {
  return (
    <AppBar
      position='fixed'
      color='default'
      open={open}
    >
      <StyledToolbar>
        <div>
          {left}
        </div>
        <div>
          {right}
        </div>
      </StyledToolbar>
    </AppBar>
  )
}
