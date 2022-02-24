import React from 'react'
import { useTranslation } from 'react-i18next'

export const Reports = () => {
  const { t } = useTranslation()

  return (
    <div>{t('reports')}</div>
  )
}
