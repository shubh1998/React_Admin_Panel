import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTE_PATHS, TOKEN } from '../../constants/constants'

export const useAuthGuard = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem(TOKEN)
  const { pathname } = useLocation()

  useEffect(() => {
    if (token) {
      if (pathname === '/') {
        navigate(ROUTE_PATHS.dashboard, {
          replace: true
        })
      }
    } else {
      navigate(ROUTE_PATHS.login, { replace: true })
    }
  }, [token, navigate, pathname])

  return !!token
}
