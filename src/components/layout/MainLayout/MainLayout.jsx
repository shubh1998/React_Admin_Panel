import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main } from './main.styles'

export const MainLayout = ({ children }) => {
  const open = useSelector((state) => state.ham.open)
  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box
          component={Main}
          open={open}
          sx={{
            flexGrow: 1,
            p: 3,
            height: '100vh',
            backgroundColor: (theme) => theme.colors.layout
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  )
}
