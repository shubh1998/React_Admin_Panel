import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import deCommon from './locales/de/common.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },
      de: {
        common: deCommon
      }
    }, // languages available
    lng: localStorage.getItem('language') || 'en', // by default english language
    fallbackLng: 'en',
    ns: 'common', //
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
