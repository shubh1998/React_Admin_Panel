import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledMenu, StyledMenuItem } from '../../styles/Header.styles'
import { CustomTypography } from '../../../../ui-kit/atoms/Typography/CustomTypography'
import { ProfileIcon } from '../../../../ui-kit/atoms/icons/iconComponents/ProfileIcon'

export const ProfileMenu = () => {
  const {
    anchorElUser,
    menuItems,
    toggleUserMenu
  } = useHeaderController()

  return (
    <>
      <Button
        color='primary'
        variant='text'
        sx={{
          border: 'none',
          color: 'black',
          '&:hover': {
            border: 'none',
            boxShadow: 'none'
          }
        }}
        onClick={toggleUserMenu}
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
        onClose={e => toggleUserMenu(e, true)}
      >
        {menuItems.map((menuItem) => (
          <StyledMenuItem
            key={menuItem.label}
            onClick={() => {
              menuItem.handler()
            }}
            width='160px'
          >
            {menuItem.icon}
            <CustomTypography align='center' sx={{ ml: 1 }} value={menuItem.label} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  )
}
