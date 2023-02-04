import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { MobileMenu } from './MobileMenu'

const component = {
  title: 'widgets/Header/MobileMenu',
  component: MobileMenu
}

export default component as ComponentMeta<typeof MobileMenu>

const Template: ComponentStory<typeof MobileMenu> = (args) => <MobileMenu {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
