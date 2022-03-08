import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CustomButton } from '../../../components/ui-kit/atoms/Button/CustomButton'
import CustomCheckbox from '../../../components/ui-kit/atoms/CheckBox/CustomCheckBox'
import { Login1Icon } from '../../../components/ui-kit/atoms/icons/iconComponents/Login1Icon'
import { LoginBg2Icon } from '../../../components/ui-kit/atoms/icons/iconComponents/LoginBg2Icon'
import CustomTextField from '../../../components/ui-kit/atoms/TextField/CustomTextField'
import { CustomTypography } from '../../../components/ui-kit/atoms/Typography/CustomTypography'
import { handleToaster } from '../../../redux-thunk/redux/Toaster/toasterSlice'
import {
  ROUTE_PATHS,
  TOASTER_TYPE,
  TOKEN
} from '../../../utils/constants/constants'
import { LoginContainer } from './Login.styles'

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkedOne, setCheckedOne] = React.useState(true)
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

  const handleCheckBoxOneChange = (event) => {
    setCheckedOne(event.target.checked)
  }

  return (
    <Grid container>
      <Grid item xs={12} lg={6} sx={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <LoginContainer
            style={{
              maxWidth: '500px  ',
              margin: '40px auto',
              textAlign: 'left'
            }}
          >
            <div
              style={{
                borderBottom: '4px solid lightgrey',
                width: 'fit-content',
                marginBottom: 15,
                paddingBottom: 10
              }}
            >
              <CustomTypography
                value='Log in'
                variant='h3'
                sx={{ fontWeight: 'bold' }}
              />
            </div>
            <CustomTextField
              sx={{ marginBottom: '20px' }}
              label='Username'
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextField
              sx={{ marginBottom: '20px' }}
              label='Password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CustomCheckbox
                circle
                size='small'
                label='Remember me'
                labelPlacement='end'
                checked={checkedOne}
                onChange={handleCheckBoxOneChange}
              />
              <Link to='#' style={{ textDecoration: 'none' }}>
                {' '}
                <CustomTypography
                  value='Forget Password ?'
                  sx={{ fontSize: 14 }}
                />
              </Link>
            </div>

            <CustomButton
              disabled={!(email && password)}
              onClick={loginHandler}
            >
              <CustomTypography sx={{ fontWeight: 'bold' }} value='Login' />
            </CustomButton>
          </LoginContainer>
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
          <Login1Icon style={{ height: '100%', width: '100%' }} />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CustomTypography
            variant='h2'
            align='center'
            value='Welcome to our community'
            sx={{ color: 'white', padding: '20px' }}
          />
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
          <LoginBg2Icon style={{ height: '100%', width: '100%' }} />
        </div>
      </Grid>
    </Grid>
  )
}
