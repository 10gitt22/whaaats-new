import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Page404 } from './Page404'

const component = {
  title: 'pages/Page404',
  component: Page404
}

export default component as ComponentMeta<typeof Page404>

const Template: ComponentStory<typeof Page404> = (args) => <Page404 {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
