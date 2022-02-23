import styled from '@emotion/styled'
import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const GamesContainer = styled.div({
  display: 'grid',
  padding: '4%',
  margin: '10%',
  justifyContent: 'center',
  textAlign: 'center'
})

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = () => {
    if (email && password) {
      const jwtToken = encodeURIComponent(email + password)
      localStorage.setItem('token', jwtToken)
      navigate('/', { replace: true })
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
      <GamesContainer className='games-container'>
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
      </GamesContainer>
    </Paper>
  )
}
