import { RightSideOptionContainer, StyledIconButton } from './styles/Header.styles'
import MenuIcon from '@mui/icons-material/Menu'
import { AppHeader } from 'components/ui-kit/AppHeader/AppHeader'
import { useHeaderController } from './controller/useHeaderController'
import { LanguageMenu } from './components/LanguageMenu/LanguageMenu'
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu'
import { Notification } from './components/Notification/Notification'

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
        <RightSideOptionContainer>
          <LanguageMenu />
          <Notification />
          <ProfileMenu />
        </RightSideOptionContainer>
      }
    />
  )
}
