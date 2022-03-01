import { Button, Paper, styled, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleToaster } from '../redux-thunk/redux/Toaster/toasterSlice'
import { toasterTypes } from '../utils/constants/toaster'

export const LoginContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  padding: '4%',
  margin: '10%',
  justifyContent: 'center',
  textAlign: 'center'
}))

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const loginHandler = () => {
    if (email && password) {
      const jwtToken = encodeURIComponent(email + password)
      localStorage.setItem('token', jwtToken)
      dispatch(handleToaster({
        open: true,
        message: 'Logged in successfully !',
        type: toasterTypes.success
      }))
      navigate('/dashboard/reports', { replace: true })
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: '500px  ',
        justifyContent: 'center',
        margin: '40px auto',
        display: 'flex'
      }}
    >
      <LoginContainer>
        <h1> Login </h1>
        <TextField
          sx={{ marginBottom: '10px' }}
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder='Enter password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{ marginTop: '40px', backgroundColor: 'black' }}
          variant='contained'
          disabled={!(email && password)}
          onClick={loginHandler}
        >
          Login
        </Button>
      </LoginContainer>
    </Paper>
  )
}
