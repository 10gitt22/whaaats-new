import { FC } from 'react'
import styles from './Logo.module.scss'

type LogoProps = {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={styles.Logo}>
      {/* eslint-disable i18next/no-literal-string */}
      Whaaat&apos;s <span>new</span>
    </div>
  )
}
