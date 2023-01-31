import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { NavLink } from './NavLink'

const component = {
  title: 'shared/NavLink',
  component: NavLink,
  args: {
    to: '/'
  }
}

export default component as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Link'
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Link'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
