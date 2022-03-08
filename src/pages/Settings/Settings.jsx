import React from 'react'
import { useTranslation } from 'react-i18next'

export const Settings = () => {
  const { t } = useTranslation()

  return (
    <div>{t('settings')}</div>
  )
}
