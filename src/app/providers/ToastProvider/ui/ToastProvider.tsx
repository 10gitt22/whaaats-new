import { FC, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { Toast } from 'shared/ui/Toast/Toast'
import { ToastContext } from '../lib/ToastContext'

const ToastProvider: FC = (props) => {
  const success = (message: string) => {
    toast.success(message)
  }

  const error = (message: string) => {
    toast.error(message)
  }

  const defaultProps = useMemo(() => {
    return {
      success,
      error
    }
  }, [])

  return (
    <ToastContext.Provider value={defaultProps}>
      <Toast />
      {props.children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
