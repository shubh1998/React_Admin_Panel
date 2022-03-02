import { Button, Typography } from '@mui/material'
import { ProfileIcon } from '../../../../ui-kit/icons/iconComponents/ProfileIcon'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledMenu, StyledMenuItem } from '../../styles/Header.styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

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
