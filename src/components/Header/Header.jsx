import { IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawerToggle } from '../../redux-thunk/redux/Ham/hamSlice'
import { AppBar } from './header.styles'

export const Header = () => {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ham.open)
  console.log('open', open)
  return (
    <AppBar position='fixed' open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000', color: '#ffffff' }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => dispatch(handleDrawerToggle())}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
