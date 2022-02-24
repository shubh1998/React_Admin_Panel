import { AppBar, Avatar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleDrawerToggle } from '../../../redux-thunk/redux/Ham/hamSlice'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240
export const Header = () => {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const dispatch = useDispatch()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const logoutHandler = () => {
    setAnchorElUser(null)
    localStorage.removeItem('token')
    navigate('/login')
  }

  const profileHandler = () => {
    setAnchorElUser(null)
    navigate('/settings')
  }

  const menuItems = [
    {
      label: 'Profile',
      handler: profileHandler
    },
    {
      label: 'Logout',
      handler: logoutHandler
    }
  ]

  const handleDrawer= () => dispatch(handleDrawerToggle())

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#000000',
        color: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawer}
          edge='start'
          // sx={{ mr: 2, ...(open && { display: 'none' }) }}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, textAlign: 'left' }}>
          Admin Panel
        </Typography>
        <Avatar
          onClick={handleOpenUserMenu}
          sx={{ p: 0, cursor: 'pointer' }}
        >
          PK
        </Avatar>
        <Menu
          sx={{ mt: '45px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.label} onClick={() => { menuItem.handler() }}>
              <Typography textAlign='center'>{menuItem.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}