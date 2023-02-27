import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Input } from './Input'

const component = {
  title: 'shared/Input',
  component: Input,
  args: {
    id: 'Username',
    label: 'Username',
    type: 'text'
  }
}

export default component as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Focused = Template.bind({})
Focused.args = {
  autoFocus: true
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'gitt22'
}
