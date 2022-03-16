import { Card } from '@mui/material'
import { CustomButton } from 'components/ui-kit/Button/CustomButton'
import { CustomTextField } from 'components/ui-kit/TextField/CustomTextField'
import { CustomTypography } from 'components/ui-kit/Typography/CustomTypography'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { TOASTER_TYPE } from 'utils/constants/constants'
import { ChangePasswordContainer } from './Settings.styles'

export const Settings = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const changePassword = () => {
    dispatch(handleToaster({
      openToaster: true,
      toasterMessage: 'Password changed successfully, please re-login !!',
      toasterType: TOASTER_TYPE.success
    }))
  }

  return (
    <ChangePasswordContainer>
      <Card
        sx={{
          width: '600px',
          display: 'inline-grid',
          justifyContent: 'center',
          padding: '40px',
          marginTop: '50px',
          textAlign: 'center'
        }}
      >
        <CustomTypography value={t('settings')} variant='h3' sx={{ marginBottom: '15px' }} />
        <CustomTextField
          type='password'
          sx={{ marginBottom: '20px' }}
          label={t('currentPassword')}
        />
        <CustomTextField
          type='password'
          sx={{ marginBottom: '20px' }}
          label={t('newPassword')}
        />
        <CustomTextField
          type='password'
          sx={{ marginBottom: '20px' }}
          label={t('confirmPassword')}
        />

        <CustomButton
          variant='contained'
          sx={{ margin: '30px 0' }}
          onClick={changePassword}
        >
          <CustomTypography sx={{ fontWeight: 'bold' }} value={t('changePassword')} />
        </CustomButton>
      </Card>
    </ChangePasswordContainer>
  )
}
