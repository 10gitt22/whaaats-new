import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Header } from './Header'

const component = {
  title: 'widgets/Header',
  component: Header,
  decorators: [StoreDecorator({})]
}

export default component as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
