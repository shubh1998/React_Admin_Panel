import { Paper } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/ui-kit/atoms/Button/CustomButton'
import CustomTextField from '../../components/ui-kit/atoms/TextField/CustomTextField'
import { CustomTypography } from '../../components/ui-kit/atoms/Typography/CustomTypography'
import { handleToaster } from '../../redux-thunk/redux/Toaster/toasterSlice'
import { ROUTE_PATHS, TOASTER_TYPE, TOKEN } from '../../utils/constants/constants'

export const Settings = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const changePassword = () => {
    dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'Password changed successfully, please re-login !!',
      toasterType: TOASTER_TYPE.success
    }))
    localStorage.removeItem(TOKEN)
    navigate(ROUTE_PATHS.login)
  }

  return (
    <Paper
      elevation={3} sx={{
        width: '600px',
        display: 'inline-grid',
        justifyContent: 'center',
        padding: '40px',
        marginTop: '50px'
      }}
    >
      <CustomTypography value={t('settings')} variant='h3' sx={{ marginBottom: '15px' }} />
      <CustomTextField
        type='password'
        sx={{ marginBottom: '20px' }}
        label={t('currentPassword')}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <CustomTextField
        type='password'
        sx={{ marginBottom: '20px' }}
        label={t('newPassword')}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <CustomTextField
        type='password'
        sx={{ marginBottom: '20px' }}
        label={t('confirmPassword')}
        // onChange={(e) => setEmail(e.target.value)}
      />

      <CustomButton
        variant='contained'
        sx={{ margin: '30px 0' }}
        onClick={changePassword}
      >
        <CustomTypography sx={{ fontWeight: 'bold' }} value='Change Password' />
      </CustomButton>
    </Paper>
  )
}
