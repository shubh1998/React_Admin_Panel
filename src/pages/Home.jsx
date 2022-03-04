import React from 'react'
import { useTranslation } from 'react-i18next'
import { Dashboard } from './Dashboard/Dashboard'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('home')}
      <Dashboard />
    </div>
  )
}
