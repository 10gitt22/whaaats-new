import { lazy } from 'react'
import { EditProfileDataFormProps } from './EditProfileDataForm'

export const EditProfileDataFormAsync = lazy<React.FC<EditProfileDataFormProps>>(
  async () => await (import('./EditProfileDataForm'))
)
