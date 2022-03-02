import { StyledIconButton } from './styles/Header.styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useHeaderController } from './controller/useHeaderController'
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu'
import { LanguageMenu } from './components/LanguageMenu/LanguageMenu'
import { AppHeader } from '../../ui-kit/AppHeader/AppHeader'
import { Notification } from './components/Notification/Notification'

export const Header = () => {
  const {
    open,
    handleDrawer
  } = useHeaderController()

  return (
    <AppHeader
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
          <Notification />
          <ProfileMenu />
        </>
      }
    />
  )
}
