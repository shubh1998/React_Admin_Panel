import React from 'react'
import { useTranslation } from 'react-i18next'
import { CustomSwitch } from '../components/ui-kit/atoms/Switch/CustomSwitch'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('home')}
      <CustomSwitch size='small' color='error' />
      <CustomSwitch size='medium' />
      <CustomSwitch size='large' />
      <CustomSwitch size='small' color='error' />
    </div>
  )
}
