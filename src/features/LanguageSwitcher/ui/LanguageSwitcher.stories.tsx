import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { LanguageSwitcher } from './LanguageSwitcher'

const component = {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher
}

export default component as ComponentMeta<typeof LanguageSwitcher>

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
