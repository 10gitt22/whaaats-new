import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Logo.module.scss'

type LogoProps = {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Logo, {}, [className])}>
      {/* eslint-disable i18next/no-literal-string */}
      Whaaat&apos;s <span>new</span>
    </div>
  )
}
