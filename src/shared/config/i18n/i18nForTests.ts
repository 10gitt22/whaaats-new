import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const en_translation = require('../../../../public/locales/en/translation.json')
const ua_translation = require('../../../../public/locales/uk-UA/translation.json')

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    resources: { 
      en: { translation: en_translation },
      'uk-UA': { translation: ua_translation },
    }
  })

export default i18n
