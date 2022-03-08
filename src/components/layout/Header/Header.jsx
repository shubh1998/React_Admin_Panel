import { StyledIconButton } from './styles/Header.styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useHeaderController } from './controller/useHeaderController'
import { LanguageMenu } from './components/LanguageMenu/LanguageMenu'
import { Notification } from './components/Notification/Notification'
import { AppHeader } from '../../ui-kit/compounds/AppHeader/AppHeader'
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu'

export const Header = () => {
  const { isSideNavOpen, toggleSideNavbar } = useHeaderController()

  return (
    <AppHeader
      openDrawer={isSideNavOpen}
      handleDrawer={toggleSideNavbar}
      left={
        !isSideNavOpen
          ? (
            <StyledIconButton
              color='inherit'
              aria-label='open drawer'
              onClick={toggleSideNavbar}
              edge='start'
              mr={2}
            >
              <MenuIcon />
            </StyledIconButton>
            )
          : <></>
      }
      right={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <LanguageMenu />
          <Notification />
          <ProfileMenu />
        </div>
      }
    />
  )
}
