import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleDrawerToggle } from '../../../../redux-thunk/redux/Ham/hamSlice'

export const useHeaderController = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorElLanguage, setAnchorElLanguage] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en')
  const open = useSelector((state) => state.ham.open)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    setAnchorElUser(null)
    localStorage.removeItem('token')
    navigate('/login')
  }

  const profileHandler = () => {
    setAnchorElUser(null)
    navigate('/settings')
  }

  const menuItems = [
    {
      label: 'Profile',
      handler: profileHandler
    },
    {
      label: 'Logout',
      handler: logoutHandler
    }
  ]
  const languageMenuItems = [
    {
      label: 'en'
    },
    {
      label: 'de'
    }
  ]

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget)
  }

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null)
  }

  const changeLanguage = (lang) => {
    setAnchorElLanguage(null)
    localStorage.setItem('language', lang)
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  const handleDrawer = () => dispatch(handleDrawerToggle())

  return {
    anchorElUser,
    anchorElLanguage,
    selectedLanguage,
    open,
    menuItems,
    languageMenuItems,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleOpenLanguageMenu,
    handleCloseLanguageMenu,
    changeLanguage,
    handleDrawer
  }
}
