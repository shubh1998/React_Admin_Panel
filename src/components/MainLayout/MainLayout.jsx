import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { Main } from './mainLayout.styles'

export const MainLayout = ({ children }) => {
  const open = useSelector((state) => state.ham.open)
  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box component={Main} open={open} sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  )
}
