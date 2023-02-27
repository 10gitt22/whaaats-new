import { lazy } from 'react'
import { EditBackgroundPhotoFormProps } from './EditBackgroundPhotoForm'

export const EditBackgroundPhotoFormAsync = lazy<React.FC<EditBackgroundPhotoFormProps>>(
  async () => await (import('./EditBackgroundPhotoForm'))
)
