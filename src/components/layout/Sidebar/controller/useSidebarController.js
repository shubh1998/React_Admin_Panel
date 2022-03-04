import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawerToggle } from '../../../../redux-thunk/redux/Ham/hamSlice'

export const useSidebarController = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const isSideBarOpen = useSelector((state) => state.ham.openHam)
  const [expandedMenuItem, setExpandedMenuItem] = useState([])

  const handleDrawerOptions = (label) => {
    const isAlreadyExpanded = expandedMenuItem.includes(label)
    if (isAlreadyExpanded) {
      // Shrink that menu list
      setExpandedMenuItem((prev) => prev.filter((item) => item !== label))
    } else {
      // Expand that menu list
      setExpandedMenuItem(prev => prev.concat(label))
    }
  }

  const toggleSideNavbar = () => {
    dispatch(handleDrawerToggle())
  }

  return {
    t,
    location,
    isSideBarOpen,
    expandedMenuItem,
    handleDrawerOptions,
    toggleSideNavbar
  }
}
