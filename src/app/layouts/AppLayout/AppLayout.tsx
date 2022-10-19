import { FC } from 'react'
import { useTheme } from 'shared/hooks/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'

export const AppLayout: FC = ({ children }) => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app_wrapper', {}, [theme])}>
      {children}
    </div>
  )
}
