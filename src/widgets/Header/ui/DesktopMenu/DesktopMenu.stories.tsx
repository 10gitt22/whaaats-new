import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { DesktopMenu } from './DesktopMenu'

const component = {
  title: 'widgets/Header/DesktopMenu',
  component: DesktopMenu
}

export default component as ComponentMeta<typeof DesktopMenu>

const Template: ComponentStory<typeof DesktopMenu> = (args) => <DesktopMenu {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
