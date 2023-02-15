import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from 'shared/ui/Modal/Modal'

import LoginForm from './LoginForm'

const component = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm
}

export default component as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <Modal isOpen={true}><LoginForm {...args} /></Modal>

export const Primary = Template.bind({})
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123'
  }
})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123'
  }
})]

export const WithError = Template.bind({})
WithError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    error: 'Password is incorrect'
  }
})]

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: true
  }
})]
