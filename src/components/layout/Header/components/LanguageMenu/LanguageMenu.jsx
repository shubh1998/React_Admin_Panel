import { MenuItem, Typography } from '@mui/material'
import { NotificationIcon } from '../../../../ui-kit/icons/iconComponents/NotificationIcon'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledIconButton, StyledMenu } from '../../styles/Header.styles'

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
