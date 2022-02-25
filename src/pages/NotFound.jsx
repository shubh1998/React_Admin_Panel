import { Box } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthGuard } from '../utils/custom-hooks/guards/useAuthGuard'

// import Image from './undraw_page_not_found_su7k.svg'

const NotFound = () => {
  const auth = useAuthGuard()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  if (auth && pathname === '/') {
    navigate('/dashboard/reports', { replace: true })
  }

  return (
    <Box sx={{ pt: 2, m: 'auto', maxWidth: '100%', height: '610px' }}>
      <img src='images/404_not_found.jpg' alt='Not Found Page' />
    </Box>
  )
}

export default NotFound
