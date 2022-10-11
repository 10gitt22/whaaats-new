import UkraineIcon from 'shared/assets/icons/countries/ukraine.png'
import GBIcon from 'shared/assets/icons/countries/great-britain.png'

export interface LanguageOption {
  locale: string
  label: string
  icon: string
}

export const languageOptions: LanguageOption[] = [
  {
    locale: 'en',
    label: 'english',
    icon: GBIcon
  },
  {
    locale: 'uk-UA',
    label: 'українська',
    icon: UkraineIcon
  }
]
