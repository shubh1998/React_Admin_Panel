import { Button, Checkbox, Grid, styled, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Login1Icon } from '../../../components/ui-kit/atoms/icons/iconComponents/Login1Icon'
import { LoginBg2Icon } from '../../../components/ui-kit/atoms/icons/iconComponents/LoginBg2Icon'
import { CustomTypography } from '../../../components/ui-kit/atoms/Typography/CustomTypography'
import { handleToaster } from '../../../redux-thunk/redux/Toaster/toasterSlice'
import { ROUTE_PATHS, TOASTER_TYPE, TOKEN } from '../../../utils/constants/constants'

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
      localStorage.setItem(TOKEN, jwtToken)
      dispatch(
        handleToaster({
          openToaster: true,
          toasterMessage: 'Logged in successfully !!',
          toasterType: TOASTER_TYPE.success
        })
      )
      navigate(ROUTE_PATHS.dashboard, {
        replace: true
      })
    }
  }

  return (
    <Grid container>
      <Grid
        item xs={12} lg={6}
        sx={{ position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoginContainer style={{
            maxWidth: '500px  ',
            margin: '40px auto',
            textAlign: 'left'
          }}
          >
            <h1> Log in </h1>
            <TextField
              sx={{ marginBottom: '30px', width: '300px', height: '30px' }}
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ marginBottom: '30px', width: '300px', height: '30px' }}
              placeholder='Enter password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <Checkbox size='small' sx={{ margin: 0, padding: 0 }} />
                <CustomTypography value='Remember me' />
              </div>
              <div>
                <Link to='#' style={{ textDecoration: 'none' }}> <CustomTypography value='Forget Password ?' sx={{ fontSize: 12 }} /></Link>
              </div>
            </div>

            <Button
              sx={{ marginTop: '25px', borderRadius: '50px' }}
              variant='outlined'
              disabled={!(email && password)}
              onClick={loginHandler}
            >
              Log In
            </Button>
          </LoginContainer>
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
          <Login1Icon style={{ height: '100%', width: '100%' }} />
        </div>
      </Grid>
      <Grid
        item xs={12} md={6}
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CustomTypography variant='h2' align='center' value='Welcome to our community' sx={{ color: 'white', padding: '20px' }} />
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
          <LoginBg2Icon style={{ height: '100%', width: '100%' }} />
        </div>
      </Grid>
    </Grid>
  )
}
