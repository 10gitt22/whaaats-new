import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button } from './Button'

const component = {
  title: 'shared/Button',
  component: Button
}

export default component as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Some text'
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Some text'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
