import { lazy } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<React.FC<LoginFormProps>>(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => resolve(import('./LoginForm')), 500)
    })
)
