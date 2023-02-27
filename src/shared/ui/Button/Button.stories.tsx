import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonVariants } from './Button'

const component = {
  title: 'shared/Button',
  component: Button
}

export default component as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Some text',
  variant: ButtonVariants.PRIMARY
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Some text',
  variant: ButtonVariants.PRIMARY
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Some text',
  variant: ButtonVariants.OUTLINED
}

export const Filled = Template.bind({})
Filled.args = {
  children: 'Some text',
  variant: ButtonVariants.FILLED
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Some text',
  variant: ButtonVariants.CLEAR
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Some text',
  variant: ButtonVariants.PRIMARY,
  disabled: true
}
