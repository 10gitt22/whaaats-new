import { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Story, StoryContext } from '@storybook/react'
import i18n from 'shared/config/i18n/i18n'

export const I18nDecorator = (StoryComponent: Story, context: StoryContext) => {
  const { locale } = context.globals
  
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  )
}