import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ProfileIcon } from '../../../../ui-kit/icons/iconComponents/ProfileIcon'
import CustomTypography from '../../../../ui-kit/Typography/CustomTypography'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledMenu, StyledMenuItem } from '../../styles/Header.styles'

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
        variant='outlined'
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
            <CustomTypography align='center' value={menuItem.label} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  )
}
