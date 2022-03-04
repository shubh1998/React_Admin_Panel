import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '../../utils/constants/constants'
import { useAuthGuard } from '../../utils/custom-hooks/guards/useAuthGuard'

export const NotFound = () => {
  const auth = useAuthGuard()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (auth && pathname === '/') {
      navigate(ROUTE_PATHS.dashboard, {
        replace: true
      })
    }
  }, [auth, navigate, pathname])

  return (
    <Box sx={{ pt: 2, m: 'auto', maxWidth: '100%', height: '610px' }}>
      <img src='images/404_not_found.jpg' alt='Not Found Page' />
    </Box>
  )
}
