import { addDecorator } from "@storybook/react"
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator' 
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator/I18nDecorator' 
import i18next from '../../src/shared/config/i18n/i18nForTests'

i18next.on('languageChanged', (locale) => {
  let direction = i18next.dir(locale)
  document.dir = direction
})

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English', left: '🇬🇧' },
        { value: 'uk-UA', title: 'Українська', left:  '🇺🇦'},
      ],
      dynamicTitle: true
    },
  },
 };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen' 
}

addDecorator((Story, context) => I18nDecorator(Story, context))
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.PRIMARY))
addDecorator(RouterDecorator)