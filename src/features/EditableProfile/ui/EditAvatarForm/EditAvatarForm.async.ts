import { lazy } from 'react'
import { EditAvatarFormProps } from './EditAvatarForm'

export const EditAvatarFormAsync = lazy<React.FC<EditAvatarFormProps>>(
  async () => await (import('./EditAvatarForm'))
)
