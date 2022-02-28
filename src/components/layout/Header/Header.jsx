import { Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { AppBar } from './styles/Header.styles'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { NotificationIcon } from '../../ui-kit/icons/iconComponents/NotificationIcon'
import { ProfileIcon } from '../../ui-kit/icons/iconComponents/ProfileIcon'
import { useHeaderController } from './controller/useHeaderController'

export const Header = () => {
  const {
    anchorElUser,
    anchorElLanguage,
    selectedLanguage,
    open,
    menuItems,
    languageMenuItems,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleOpenLanguageMenu,
    handleCloseLanguageMenu,
    changeLanguage,
    handleDrawer
  } = useHeaderController()

  return (
    <AppBar
      position='fixed'
      sx={{
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        color: 'black',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }}
      color='default'
      open={open}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={handleOpenLanguageMenu}>
            <NotificationIcon style={{ width: 21, height: 20 }} />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElLanguage}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElLanguage)}
            onClose={handleCloseLanguageMenu}
          >
            {languageMenuItems.map((language) => (
              <MenuItem key={language.label} onClick={() => changeLanguage(language.label)} selected={language.label === selectedLanguage}>
                <Typography textAlign='center'>{language.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <IconButton>
            <NotificationIcon style={{ width: 21, height: 20 }} />
          </IconButton>
          <Button
            color='primary'
            variant='outlined'
            onClick={handleOpenUserMenu}
            startIcon={<ProfileIcon style={{ width: 21, height: 20 }} />}
            endIcon={!anchorElUser ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          >
            User Admin
          </Button>
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
              <MenuItem key={menuItem.label} onClick={() => { menuItem.handler() }} sx={{ width: 160 }}>
                <Typography textAlign='center'>{menuItem.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  )
}
