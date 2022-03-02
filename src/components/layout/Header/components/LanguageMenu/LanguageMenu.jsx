import { MenuItem } from '@mui/material'
import { LANGUAGES } from '../../../../../utils/constants/constants'
import CustomTypography from '../../../../ui-kit/Typography/CustomTypography'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledIconButton, StyledMenu } from '../../styles/Header.styles'

export const LanguageMenu = () => {
  const {
    anchorElLanguage,
    selectedLanguage,
    toggleLanguageMenu,
    changeLanguage
  } = useHeaderController()

  return (
    <>
      <StyledIconButton onClick={toggleLanguageMenu}>
        <CustomTypography align='center' value={selectedLanguage} />
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
        onClose={(e) => toggleLanguageMenu(e, true)}
      >
        {LANGUAGES.map((language) => (
          <MenuItem
            key={language.label}
            onClick={() => changeLanguage(language.languageCode)}
            selected={language.languageCode === selectedLanguage}
          >
            <CustomTypography align='center' value={language.label} />
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  )
}
