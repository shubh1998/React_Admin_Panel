import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useAuthGuard = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const { pathname } = useLocation()

  useEffect(() => {
    if (token) {
      if (pathname === '/') navigate('/dashboard/reports', { replace: true })
    } else {
      navigate('/login', { replace: true })
    }
  }, [token])

  if (token) {
    return true
  } else {
    return false
  }
}
