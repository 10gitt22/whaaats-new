import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { LogoSmall } from './LogoSmall'

const component = {
  title: 'shared/LogoSmall',
  component: LogoSmall
}

export default component as ComponentMeta<typeof LogoSmall>

const Template: ComponentStory<typeof LogoSmall> = (args) => <LogoSmall {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
