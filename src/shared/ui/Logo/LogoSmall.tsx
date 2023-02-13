import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Logo.module.scss'

type LogoSmallProps = {
  className?: string
}

export const LogoSmall: FC<LogoSmallProps> = memo(({ className }) => {
  return (
    <div className={classNames(styles.Logo, {}, [className])}>
      {/* eslint-disable i18next/no-literal-string */}
      W.
    </div>
  )
})
