import { Button, MenuItem, Typography } from '@mui/material'
import { AppBar, StyledIconButton, StyledMenu, StyledMenuItem, StyledToolbar } from './styles/Header.styles'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { NotificationIcon } from '../../ui-kit/icons/iconComponents/NotificationIcon'
import { ProfileIcon } from '../../ui-kit/icons/iconComponents/ProfileIcon'
import { useHeaderController } from './controller/useHeaderController'

export const ProfileMenu = () => {
  const {
    anchorElUser,
    menuItems,
    handleOpenUserMenu,
    handleCloseUserMenu
  } = useHeaderController()

  return (
    <>
      <Button
        color='primary'
        variant='outlined'
        onClick={handleOpenUserMenu}
        startIcon={<ProfileIcon style={{ width: 20, height: 20 }} />}
        endIcon={
          !anchorElUser ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
        }
      >
        User Admin
      </Button>
      <StyledMenu
        mt='45px'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuItems.map((menuItem) => (
          <StyledMenuItem
            key={menuItem.label}
            onClick={() => {
              menuItem.handler()
            }}
            width='160px'
          >
            <Typography textAlign='center'>{menuItem.label}</Typography>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  )
}

export const NotificationComponent = () => {
  return (
    <StyledIconButton>
      <NotificationIcon style={{ width: 20, height: 20 }} />
    </StyledIconButton>
  )
}

export const LanguageMenu = () => {
  const {
    anchorElLanguage,
    selectedLanguage,
    languageMenuItems,
    handleOpenLanguageMenu,
    handleCloseLanguageMenu,
    changeLanguage
  } = useHeaderController()

  return (
    <>
      <StyledIconButton onClick={handleOpenLanguageMenu}>
        <NotificationIcon style={{ width: 20, height: 20 }} />
      </StyledIconButton>
      <StyledMenu
        mt='45px'
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
          <MenuItem
            key={language.label}
            onClick={() => changeLanguage(language.label)}
            selected={language.label === selectedLanguage}
          >
            <Typography textAlign='center'>{language.label}</Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  )
}

export const HeaderBox = ({ left, right, open, handleDrawer, ...props }) => {
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

export const Header = () => {
  const {
    open,
    handleDrawer
  } = useHeaderController()

  return (
    <HeaderBox
      open={open}
      handleDrawer={handleDrawer}
      left={
        <StyledIconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawer}
          edge='start'
          mr={2}
        >
          <MenuIcon />
        </StyledIconButton>
      }
      right={
        <>
          <LanguageMenu />
          <NotificationComponent />
          <ProfileMenu />
        </>
      }
    />
  )
}
