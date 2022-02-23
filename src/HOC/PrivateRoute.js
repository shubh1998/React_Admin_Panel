import React from 'react'
import { Navigate } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout/MainLayout'

export const AuthenticationValidator = ({ Component }) => {
  const token = localStorage.getItem('token')

  return token
    ? <MainLayout Child={Component} />
    : <Navigate to='/login' />
}
