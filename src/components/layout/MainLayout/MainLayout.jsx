import { CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main, StyledBox } from './styles/MainLayout.styles'

export const MainLayout = ({ children }) => {
  const open = useSelector((state) => state.ham.open)
  return (
    <div className='App'>
      <StyledBox display='flex'>
        <CssBaseline />
        <Header />
        <Sidebar />
        <StyledBox
          component={Main}
          open={open}
          flexGrow={1}
          padding={3}
          height='100vh'
        >
          <Toolbar />
          {children}
        </StyledBox>
      </StyledBox>
    </div>
  )
}
