import { Grid } from '@mui/material'
import { AppLoader } from 'components/ui-kit/AppLoader/AppLoader'
import { CustomButton } from 'components/ui-kit/Button/CustomButton'
import { Login1Icon } from 'components/ui-kit/icons/iconComponents/Login1Icon'
import { LoginBg2Icon } from 'components/ui-kit/icons/iconComponents/LoginBg2Icon'
import { CustomTextField } from 'components/ui-kit/TextField/CustomTextField'
import { CustomTypography } from 'components/ui-kit/Typography/CustomTypography'
import { LOADER_TYPE } from 'utils/constants/constants'
import { useLoginController } from './controller/useLoginController'
import { LoginContainer } from './Login.styles'

export const Login = () => {
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    loginLoading
  } = useLoginController()

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
              placeholder='Username'
              variant='outlined'
              fullWidth
              id='username'
              name='username'
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              helperText={errors.username}
              enableValidation={Boolean(values.username || errors.username)}
            />
            <CustomTextField
              sx={{ marginBottom: '20px' }}
              label='Password'
              type='password'
              placeholder='password'
              variant='outlined'
              name='password'
              id='password'
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password}
              enableValidation={Boolean(values.password || errors.password)}
            />

            <CustomButton
              disabled={Boolean(errors.username) || Boolean(errors.password) || !values.username.length || loginLoading}
              onClick={handleSubmit}
            >
              {
                loginLoading
                  ? <AppLoader variant={LOADER_TYPE.PULSE} size={5} />
                  : <CustomTypography sx={{ fontWeight: 'bold' }} value='Login' />
              }
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
            sx={{ color: (theme) => theme.colors.white, padding: '20px' }}
          />
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
          <LoginBg2Icon style={{ height: '100%', width: '100%' }} />
        </div>
      </Grid>
    </Grid>
  )
}
