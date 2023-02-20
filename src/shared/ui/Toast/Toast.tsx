import { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import styles from './Toast.module.scss'

export const Toast: FC = () => {
  return (
    <Toaster toastOptions={{
      className: styles.Toast,
      position: 'bottom-right',
      error: {
        className: styles.error
      },
      success: {
        className: styles.success
      }
    }}/>
  )
}
