import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

const drawerWidth = 240

export const MainLayout = ({ children }) => {
  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar isAlwaysOpen={false} />
        <Sidebar isAlwaysOpen />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  )
}
