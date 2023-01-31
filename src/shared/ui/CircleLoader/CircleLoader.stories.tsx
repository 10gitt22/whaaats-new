import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CircleLoader } from './CircleLoader'

const component = {
  title: 'shared/CircleLoader',
  component: CircleLoader
}

export default component as ComponentMeta<typeof CircleLoader>

const Template: ComponentStory<typeof CircleLoader> = (args) => <CircleLoader {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
