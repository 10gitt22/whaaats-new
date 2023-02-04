import { FC } from 'react'
import styles from './Logo.module.scss'

type LogoSmallProps = {
  className?: string
}

export const LogoSmall: FC<LogoSmallProps> = ({ className }) => {
  return (
    <div className={styles.Logo}>
      {/* eslint-disable i18next/no-literal-string */}
      W.
    </div>
  )
}
