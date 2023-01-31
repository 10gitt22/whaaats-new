import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { BurgerMenu } from './BurgerMenu'

const component = {
  title: 'shared/BurgerMenu',
  component: BurgerMenu
}

export default component as ComponentMeta<typeof BurgerMenu>

const Template: ComponentStory<typeof BurgerMenu> = (args) => <BurgerMenu {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
