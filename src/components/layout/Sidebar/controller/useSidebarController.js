import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { handleDrawerToggle } from '../../../../redux-thunk/redux/Ham/hamSlice'

export const useSidebarController = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ham.open)
  const { t } = useTranslation()
  const [openCollapse, setOpenCollapse] = useState([])

  const handleDrawer = (label) => {
    if (openCollapse.includes(label)) {
      setOpenCollapse((prev) => prev.filter((item) => item !== label))
    } else {
      setOpenCollapse(prev => prev.concat(label))
    }
  }

  const handleDrawerClose = () => {
    dispatch(handleDrawerToggle())
  }

  return {
    location,
    open,
    openCollapse,
    t,
    handleDrawer,
    handleDrawerClose
  }
}
