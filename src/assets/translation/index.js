import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import deCommon from './locales/de/common.json'
import { LANGUAGE, LANGUAGES } from '../../utils/constants/constants'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon
    },
    de: {
      common: deCommon
    }
  }, // languages available
  lng: localStorage.getItem(LANGUAGE) || LANGUAGES[0].languageCode, // by default english language
  fallbackLng: LANGUAGES[0].languageCode,
  ns: 'common', //
  defaultNS: 'common',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
