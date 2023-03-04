import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const en_translation = require('../../../../public/locales/en/translation.json')
const en_forms = require('../../../../public/locales/en/forms.json')
const en_profile = require('../../../../public/locales/en/profile.json')

const ua_translation = require('../../../../public/locales/uk-UA/translation.json')
const ua_forms = require('../../../../public/locales/uk-UA/forms.json')
const ua_profile = require('../../../../public/locales/uk-UA/profile.json')

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
      en: { 
        translation: en_translation,
        forms: en_forms,
        profile: en_profile
      },
      'uk-UA': { 
        translation: ua_translation,
        forms: ua_forms,
        profile: ua_profile
      },
    }
  })

export default i18n
