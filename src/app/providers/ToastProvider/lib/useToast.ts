import { useContext } from 'react'
import { ToastContext, ToastContextType } from './ToastContext'

export const useToast = () => {
  const { success, error } = useContext(ToastContext) as ToastContextType
  return {
    success,
    error
  }
}
