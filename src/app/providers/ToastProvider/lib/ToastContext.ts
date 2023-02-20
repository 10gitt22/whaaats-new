import { createContext } from 'react'

export type ToastContextType = {
  success: (message: string) => void
  error: (message: string) => void
}

export const ToastContext = createContext<ToastContextType | null>(null)
