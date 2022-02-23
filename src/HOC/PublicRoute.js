import React from 'react'
import { Navigate } from 'react-router-dom'

export const NonAuthenticationValidator = ({ Component }) => {
  const token = localStorage.getItem('token')

  return token ? <Navigate to='/' /> : <Component />
}
