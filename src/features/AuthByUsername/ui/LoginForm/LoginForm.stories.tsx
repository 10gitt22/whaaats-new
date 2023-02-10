import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginForm } from './LoginForm'

const component = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm
}

export default component as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <Modal isOpen={true}><LoginForm {...args} /></Modal>

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
