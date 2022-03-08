import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawerToggle } from '../../../../redux-thunk/redux/Ham/hamSlice'
import { LANGUAGE, LANGUAGES, ROUTE_PATHS, TOASTER_TYPE, TOKEN } from '../../../../utils/constants/constants'
import { handleToaster } from '../../../../redux-thunk/redux/Toaster/toasterSlice'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

const NAV_MENU_OPTIONS = {
  logout: 'logout',
  settings: 'settings',
  profile: 'profile'
}

export const useHeaderController = () => {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSideNavOpen = useSelector((state) => state.ham.openHam)

  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorElLanguage, setAnchorElLanguage] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem(LANGUAGE) || LANGUAGES[0].languageCode
  )

  const menuItems = [
    {
      label: t(NAV_MENU_OPTIONS.settings),
      icon: <SettingsIcon />,
      handler: () => {
        setAnchorElUser(null)
        navigate(ROUTE_PATHS.settings)
      }
    },
    {
      label: t(NAV_MENU_OPTIONS.logout),
      icon: <LogoutIcon />,
      handler: () => {
        setAnchorElUser(null)
        localStorage.removeItem(TOKEN)
        navigate(ROUTE_PATHS.login)
      }
    }
  ]

  const toggleUserMenu = (event, closeMenu) => {
    if (closeMenu) {
      setAnchorElUser(null)
    } else {
      setAnchorElUser(event.currentTarget)
    }
  }

  const toggleLanguageMenu = (event, closeMenu) => {
    if (closeMenu) {
      setAnchorElLanguage(null)
    } else {
      setAnchorElLanguage(event.currentTarget)
    }
  }

  const changeLanguage = (lang) => {
    setAnchorElLanguage(null)
    localStorage.setItem(LANGUAGE, lang)
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  const toggleSideNavbar = () => dispatch(handleDrawerToggle())

  const showNotification = () => {
    dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'You don\'t have any pending notification !!',
      toasterType: TOASTER_TYPE.warning
    }))
  }

  return {
    anchorElUser,
    anchorElLanguage,
    isSideNavOpen,
    menuItems,
    selectedLanguage,
    changeLanguage,
    toggleUserMenu,
    toggleLanguageMenu,
    toggleSideNavbar,
    showNotification
  }
}
